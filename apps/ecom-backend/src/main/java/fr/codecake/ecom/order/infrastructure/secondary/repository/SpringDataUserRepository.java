package fr.codecake.ecom.order.infrastructure.secondary.repository;

import fr.codecake.ecom.order.domain.user.aggregate.User;
import fr.codecake.ecom.order.domain.user.repository.UserRepository;
import fr.codecake.ecom.order.domain.user.vo.UserAddressToUpdate;
import fr.codecake.ecom.order.domain.user.vo.UserEmail;
import fr.codecake.ecom.order.domain.user.vo.UserPublicId;
import fr.codecake.ecom.order.infrastructure.secondary.entity.AuthorityEntity;
import fr.codecake.ecom.order.infrastructure.secondary.entity.UserEntity;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Repository
public class SpringDataUserRepository implements UserRepository {

  private final JpaUserRepository jpaUserRepository;
  private final JpaAuthorityRepository jpaAuthorityRepository;

  public SpringDataUserRepository(JpaUserRepository jpaUserRepository, JpaAuthorityRepository jpaAuthorityRepository) {
    this.jpaUserRepository = jpaUserRepository;
    this.jpaAuthorityRepository = jpaAuthorityRepository;
  }

  @Override
  public void save(User user) {
    if (user.getDbId() != null) {
      Optional<UserEntity> userToUpdateOpt = jpaUserRepository.findById(user.getDbId());
      if (userToUpdateOpt.isPresent()) {
        UserEntity userToUpdate = userToUpdateOpt.get();
        userToUpdate.updateFromUser(user);

        Set<String> authorityNames = user.getAuthorities()
            .stream()
            .map(a -> a.getName().name())
            .collect(Collectors.toSet());

        Set<AuthorityEntity> authorities = new HashSet<>(jpaAuthorityRepository.findAllById(authorityNames));
        userToUpdate.setAuthorities(authorities);

        jpaUserRepository.saveAndFlush(userToUpdate);
      }
    } else {
      UserEntity userEntity = UserEntity.from(user);

      Set<String> authorityNames = user.getAuthorities()
          .stream()
          .map(a -> a.getName().name())
          .collect(Collectors.toSet());

      if (authorityNames.isEmpty()) {
        authorityNames.add("ROLE_USER");
        System.err.println(
            String.format("No roles found for user '%s', assigning default ROLE_USER", user.getEmail().value()));
      }

      Set<AuthorityEntity> authorities = new HashSet<>(jpaAuthorityRepository.findAllById(authorityNames));

      userEntity.setAuthorities(authorities);
      jpaUserRepository.save(userEntity);
    }
  }

  @Override
  public Optional<User> get(UserPublicId userPublicId) {
    return jpaUserRepository.findOneByPublicId(userPublicId.value())
        .map(UserEntity::toDomain);
  }

  @Override
  public Optional<User> getOneByEmail(UserEmail userEmail) {
    return jpaUserRepository.findByEmail(userEmail.value())
        .map(UserEntity::toDomain);
  }

  @Override
  public void updateAddress(UserPublicId userPublicId, UserAddressToUpdate userAddress) {
    jpaUserRepository.updateAddress(userPublicId.value(),
        userAddress.userAddress().street(),
        userAddress.userAddress().city(),
        userAddress.userAddress().country(),
        userAddress.userAddress().zipCode());
  }
}