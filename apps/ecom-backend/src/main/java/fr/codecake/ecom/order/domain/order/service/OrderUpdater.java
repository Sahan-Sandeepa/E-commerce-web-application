package fr.codecake.ecom.order.domain.order.service;

import fr.codecake.ecom.order.domain.order.aggregate.Order;
import fr.codecake.ecom.order.domain.order.aggregate.OrderProductQuantity;
import fr.codecake.ecom.order.domain.order.aggregate.OrderProductQuantityBuilder;
import fr.codecake.ecom.order.domain.order.aggregate.OrderedProduct;
import fr.codecake.ecom.order.domain.order.aggregate.StripeSessionInformation;
import fr.codecake.ecom.order.domain.order.repository.OrderRepository;
import fr.codecake.ecom.product.domain.vo.PublicId;

import java.util.ArrayList;
import java.util.List;

public class OrderUpdater {

  private final OrderRepository orderRepository;

  public OrderUpdater(OrderRepository orderRepository) {
    this.orderRepository = orderRepository;
  }

  public List<OrderedProduct> updateOrderFromStripe(StripeSessionInformation stripeSessionInformation) {
    Order order = orderRepository.findByStripeSessionId(stripeSessionInformation).orElseThrow();
    order.validatePayment();
    orderRepository.updateStatusByPublicId(order.getStatus(), order.getPublicId());
    return order.getOrderedProducts();
  }

  public List<OrderProductQuantity> computeQuantity(List<OrderedProduct> orderedProducts) {
    List<OrderProductQuantity> orderProductQuantities = new ArrayList<>();
    for (OrderedProduct orderedProduct : orderedProducts) {
      OrderProductQuantity orderProductQuantity = OrderProductQuantityBuilder.orderProductQuantity()
          .productPublicId(orderedProduct.getProductPublicId())
          .quantity(orderedProduct.getQuantity())
          .build();
      orderProductQuantities.add(orderProductQuantity);
    }
    return orderProductQuantities;
  }

  public void deleteOrderByPublicId(PublicId orderPublicId) {
    orderRepository.deleteByPublicId(orderPublicId);
  }
}