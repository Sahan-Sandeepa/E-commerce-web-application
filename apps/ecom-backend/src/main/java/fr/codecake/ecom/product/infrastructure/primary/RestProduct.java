package fr.codecake.ecom.product.infrastructure.primary;

import fr.codecake.ecom.product.domain.aggregate.Product;
import fr.codecake.ecom.product.domain.aggregate.ProductBuilder;
import fr.codecake.ecom.product.domain.vo.ProductBrand;
import fr.codecake.ecom.product.domain.vo.ProductColor;
import fr.codecake.ecom.product.domain.vo.ProductDescription;
import fr.codecake.ecom.product.domain.vo.ProductName;
import fr.codecake.ecom.product.domain.vo.ProductPrice;
import fr.codecake.ecom.product.domain.vo.ProductSize;
import fr.codecake.ecom.product.domain.vo.PublicId;
import org.jilt.Builder;

import java.util.List;
import java.util.UUID;

@Builder
public class RestProduct {

  private String brand;
  private String color;
  private String description;
  private String name;
  private double price;
  private ProductSize size;
  private RestCategory category;
  private boolean featured;
  private List<RestPicture> pictures;
  private UUID publicId;
  private int nbInStock;

  public RestProduct() {
  }

  public RestProduct(String brand, String color, String description,
      String name, double price, ProductSize size,
      RestCategory category, boolean featured,
      List<RestPicture> pictures, UUID publicId, int nbInStock) {
    this.brand = brand;
    this.color = color;
    this.description = description;
    this.name = name;
    this.price = price;
    this.size = size;
    this.category = category;
    this.featured = featured;
    this.pictures = pictures;
    this.publicId = publicId;
    this.nbInStock = nbInStock;
  }

  public void addPictureAttachment(List<RestPicture> pictures) {
    this.pictures.addAll(pictures);
  }

  public static Product toDomain(RestProduct restProduct) {
    ProductBuilder productBuilder = ProductBuilder.product()
        .productBrand(new ProductBrand(restProduct.getBrand()))
        .color(new ProductColor(restProduct.getColor()))
        .description(new ProductDescription(restProduct.getDescription()))
        .name(new ProductName(restProduct.getName()))
        .price(new ProductPrice(restProduct.getPrice()))
        .size(restProduct.getSize())
        .category(RestCategory.toDomain(restProduct.getCategory()))
        .featured(restProduct.isFeatured())
        .nbInStock(restProduct.getNbInStock());

    if (restProduct.publicId != null) {
      productBuilder.publicId(new PublicId(restProduct.publicId));
    }

    if (restProduct.pictures != null && !restProduct.pictures.isEmpty()) {
      productBuilder.pictures(RestPicture.toDomain(restProduct.getPictures()));
    }

    return productBuilder.build();
  }

  public static RestProduct fromDomain(Product product) {
    return RestProductBuilder.restProduct()
        .brand(product.getProductBrand() != null ? product.getProductBrand().value() : "Unknown Brand")
        .color(product.getColor() != null ? product.getColor().value() : "Unknown Color")
        .description(product.getDescription() != null ? product.getDescription().value() : "No Description")
        .name(product.getName() != null ? product.getName().value() : "No Name")
        .price(product.getPrice() != null ? product.getPrice().value() : 0.0)
        .featured(product.getFeatured())
        .category(product.getCategory() != null ? RestCategory.fromDomain(product.getCategory()) : null)
        .size(product.getSize())
        .pictures(product.getPictures() != null ? RestPicture.fromDomain(product.getPictures()) : List.of())
        .publicId(product.getPublicId() != null ? product.getPublicId().value() : null)
        .nbInStock(product.getNbInStock())
        .build();
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public ProductSize getSize() {
    return size;
  }

  public void setSize(ProductSize size) {
    this.size = size;
  }

  public RestCategory getCategory() {
    return category;
  }

  public void setCategory(RestCategory category) {
    this.category = category;
  }

  public boolean isFeatured() {
    return featured;
  }

  public void setFeatured(boolean featured) {
    this.featured = featured;
  }

  public List<RestPicture> getPictures() {
    return pictures;
  }

  public void setPictures(List<RestPicture> pictures) {
    this.pictures = pictures;
  }

  public UUID getPublicId() {
    return publicId;
  }

  public void setPublicId(UUID publicId) {
    this.publicId = publicId;
  }

  public int getNbInStock() {
    return nbInStock;
  }

  public void setNbInStock(int nbInStock) {
    this.nbInStock = nbInStock;
  }
}