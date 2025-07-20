package fr.codecake.ecom.order.domain.user.service;

import fr.codecake.ecom.order.domain.user.aggregate.User;
import fr.codecake.ecom.order.domain.user.repository.UserRepository;
import fr.codecake.ecom.order.domain.user.vo.UserAddressToUpdate;
import fr.codecake.ecom.order.infrastructure.secondary.service.kinde.KindeService;
import fr.codecake.ecom.shared.authentication.application.AuthenticatedUser;
import org.springframework.security.oauth2.jwt.Jwt;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class UserSynchronizer {

  private final UserRepository userRepository;
  private final KindeService kindeService;

  private static final String UPDATE_AT_KEY = "last_signed_in";

  public UserSynchronizer(UserRepository userRepository, KindeService kindeService) {
    this.userRepository = userRepository;
    this.kindeService = kindeService;
  }

  public void syncWithIdp(Jwt jwtToken, boolean forceResync) {
    Map<String, Object> claims = jwtToken.getClaims();
    List<String> rolesFromToken = AuthenticatedUser.extractRolesFromToken(jwtToken);
    Map<String, Object> userInfo = kindeService.getUserInfo(claims.get("sub").toString());
    User user = User.fromTokenAttributes(userInfo, rolesFromToken);
    Optional<User> existingUserOpt = userRepository.getOneByEmail(user.getEmail());

    if (existingUserOpt.isPresent()) {
      User existingUser = existingUserOpt.get();

      Object updatedAtObj = claims.get(UPDATE_AT_KEY);

      Instant idpModifiedDate = null;
      if (updatedAtObj != null) {
        // Defensive parsing - support Integer or Long
        if (updatedAtObj instanceof Integer) {
          idpModifiedDate = Instant.ofEpochSecond(((Integer) updatedAtObj).longValue());
        } else if (updatedAtObj instanceof Long) {
          idpModifiedDate = Instant.ofEpochSecond((Long) updatedAtObj);
        } else {
          System.err.println("Unexpected UPDATE_AT_KEY type: " + updatedAtObj.getClass());
        }
      }

      Instant lastModifiedDate = existingUser.getLastModifiedDate();

      // Update if forced or idpModifiedDate is after lastModifiedDate
      if (forceResync || idpModifiedDate == null || idpModifiedDate.isAfter(lastModifiedDate)) {
        updateUser(user, existingUser);
      } else {
        System.out.println(
            "No update needed. IDP modified date: " + idpModifiedDate + ", last modified: " + lastModifiedDate);
      }
    } else {
      user.initFieldForSignup();
      userRepository.save(user);
    }
  }

  private void updateUser(User userFromToken, User existingUser) {
    existingUser.updateFromUser(userFromToken);

    existingUser.getAuthorities().clear();
    existingUser.getAuthorities().addAll(userFromToken.getAuthorities());

    if (existingUser.getLastSeen() == null) {
      existingUser.setLastSeen(Instant.now());
    }

    userRepository.save(existingUser);
  }

  public void updateAddress(UserAddressToUpdate userAddressToUpdate) {
    userRepository.updateAddress(userAddressToUpdate.userPublicId(), userAddressToUpdate);
  }
}