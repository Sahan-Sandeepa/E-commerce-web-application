package fr.codecake.ecom.order.infrastructure.secondary.repository;

import fr.codecake.ecom.order.infrastructure.secondary.entity.AuthorityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaAuthorityRepository extends JpaRepository<AuthorityEntity, String> {
}
