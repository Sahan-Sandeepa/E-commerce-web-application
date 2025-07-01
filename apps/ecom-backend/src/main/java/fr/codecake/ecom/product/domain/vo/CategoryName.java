package fr.codecake.ecom.product.domain.vo;

import fr.codecake.ecom.shared.authentication.error.domain.Assert;

public record CategoryName(String value) {
  public CategoryName {
    Assert.field("value", value).notNull().minLength(3);
  }
}