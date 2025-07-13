package fr.codecake.ecom.order.domain.user.aggregate;

import fr.codecake.ecom.order.domain.user.vo.AuthorityName;
import fr.codecake.ecom.shared.authentication.domain.Role;
import fr.codecake.ecom.shared.error.domain.Assert;
import org.jilt.Builder;

@Builder
public class Authority {

  private AuthorityName name;

  public Authority(Role user) {
    Assert.notNull("name", user);
    this.name = new AuthorityName(user.key());
  }

  public AuthorityName getName() {
    return name;
  }

  public Authority(AuthorityName name) {
    Assert.notNull("name", name);
    this.name = name;
  }

}