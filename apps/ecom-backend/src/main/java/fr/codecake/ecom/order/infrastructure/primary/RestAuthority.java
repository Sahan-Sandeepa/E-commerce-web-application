package fr.codecake.ecom.order.infrastructure.primary;

import fr.codecake.ecom.order.domain.user.aggregate.Authority;
import org.jilt.Builder;

import java.util.Collections;
import java.util.Set;
import java.util.stream.Collectors;

@Builder
public class RestAuthority {
  public static Set<String> fromSet(Set<Authority> authorities) {
    if (authorities == null || authorities.isEmpty()) {
      return Collections.emptySet();
    }
    return authorities.stream()
        .map(authority -> authority.getName().name())
        .collect(Collectors.toSet());
  }
}