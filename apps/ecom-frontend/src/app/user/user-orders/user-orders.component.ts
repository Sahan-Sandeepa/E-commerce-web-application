import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { OrderedItems, UserOrderDetail } from '../../shared/model/order.model';
import { Pagination } from '../../shared/model/request.model';
import { OrderService } from '../../shared/service/order.service';

@Component({
  selector: 'ecom-user-orders',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss',
})
export class UserOrdersComponent {
  orderService = inject(OrderService);
  orders: UserOrderDetail[] = [];
  pageRequest: Pagination = {
    page: 0,
    size: 20,
    sort: [],
  };
  showAlert = false;

  platformId = inject(PLATFORM_ID);

  ordersQuery = injectQuery(() => ({
    queryKey: ['user-orders', this.pageRequest],
    queryFn: () => lastValueFrom(this.orderService.getOrdersForConnectedUser(this.pageRequest)),
  }));

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrdersForConnectedUser(this.pageRequest).subscribe({
      next: (ordersPage) => {
        this.orders = ordersPage.content;
      },
      error: (err) => {
        console.error('Failed to load orders', err);
      }
    });
  }

  computeItemsName(items: OrderedItems[]) {
    return items.map((item) => item.name).join(', ');
  }

  computeItemsQuantity(items: OrderedItems[]) {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }

  computeTotal(items: OrderedItems[]) {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  checkIfPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  deleteOrder(publicId: string) {
    const orderToDelete = this.orders.find(order => order.publicId === publicId);

    this.orderService.deleteOrder(publicId).subscribe({
      next: () => {
        this.orders = this.orders.filter(order => order.publicId !== publicId);
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      },
      error: (err) => {
        console.error('Failed to delete order', err);
      }
    });
  }
}