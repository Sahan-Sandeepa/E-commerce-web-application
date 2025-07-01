package fr.codecake.ecom.product.domain.vo;

import fr.codecake.ecom.shared.authentication.error.domain.Assert;

public record ProductBrand(String value) {

  public ProductBrand {
    Assert.field("value", value).notNull().minLength(3);
  }
}