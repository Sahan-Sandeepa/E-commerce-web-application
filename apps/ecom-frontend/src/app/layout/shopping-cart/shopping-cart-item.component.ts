import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartLocalStorageService } from '../../services/shopping-cart-local-storage.service';
import { Product } from '../../../type';

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

  incrementItemQuantity() {
    this.shoppingCartLocalStorageService.updateItem({
      ...this.item(),
      quantity: this.item().quantity + 1,
    });
  }

  decrementItemQuantity() {
    if (this.item().quantity <= 1) {
      this.shoppingCartLocalStorageService.removeItem(this.item());
    } else {
      this.shoppingCartLocalStorageService.updateItem({
        ...this.item(),
        quantity: this.item().quantity - 1,
      });
    }
  }

  removeItemQuantity() {
    this.shoppingCartLocalStorageService.removeItem(this.item());
  }
}
