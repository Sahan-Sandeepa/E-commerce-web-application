package fr.codecake.ecom.product.domain.vo;

import fr.codecake.ecom.shared.authentication.error.domain.Assert;

import java.util.UUID;

public record PublicId(UUID value) {

  public PublicId {
    Assert.notNull("value", value);
  }
}