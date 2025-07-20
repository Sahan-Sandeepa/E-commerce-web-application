import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../admin/model/product.model';
import { CartService } from '../../shop/cart.service';

@Component({
  selector: 'ecom-shopping-cart-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.scss',
})
export class ShoppingCartItemComponent {
  private readonly cartService = inject(CartService); //injected

  faPlus = faPlus;
  faMinus = faMinus;
  faTrashCan = faTrashCan;

  item = input.required<Product & { quantity: number }>();

  get quantity(): number {
    return this.item().quantity;
  }

  incrementItemQuantity(): void {
    this.cartService.addToCart(this.item().publicId, 'add');
  }

  decrementItemQuantity(): void {
    if (this.quantity <= 1) {
      this.cartService.removeFromCart(this.item().publicId);
    } else {
      this.cartService.addToCart(this.item().publicId, 'remove');
    }
  }

  removeItemQuantity(): void {
    this.cartService.removeFromCart(this.item().publicId);
  }
}
