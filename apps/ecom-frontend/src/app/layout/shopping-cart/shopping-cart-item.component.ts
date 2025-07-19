import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../admin/model/product.model';
import { ShoppingCartLocalStorageService } from '../../shared/service/local-storage/shopping-cart-local-storage.service';

@Component({
  selector: 'ecom-shopping-cart-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.scss',
})
export class ShoppingCartItemComponent {
  private readonly shoppingCartLocalStorageService = inject(ShoppingCartLocalStorageService);

  faPlus = faPlus;
  faMinus = faMinus;
  faTrashCan = faTrashCan;

  item = input.required<Product>();

  get quantity(): number {
    return (this.item() as Product & { quantity: number }).quantity;
  }

  incrementItemQuantity() {
    const updatedItem = {
      ...this.item(),
      quantity: this.quantity + 1,
    };
    this.shoppingCartLocalStorageService.updateItem(updatedItem);
  }

  decrementItemQuantity() {
    if (this.quantity <= 1) {
      this.shoppingCartLocalStorageService.removeItem(this.item());
    } else {
      const updatedItem = {
        ...this.item(),
        quantity: this.quantity - 1,
      };
      this.shoppingCartLocalStorageService.updateItem(updatedItem);
    }
  }

  removeItemQuantity() {
    this.shoppingCartLocalStorageService.removeItem(this.item());
  }
}
