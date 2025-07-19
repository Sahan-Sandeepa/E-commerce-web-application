import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCartLocalStorageService } from '../../shared/service/local-storage/shopping-cart-local-storage.service'; 
import { FavoriteItemsLocalStorageService } from '../../shared/service/local-storage/favorite-items-local-storage.service'; 
import { Product } from '../../admin/model/product.model'; 

@Component({
  selector: 'ecom-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  private readonly shoppingCartLocalStorageService = inject(ShoppingCartLocalStorageService);
  private readonly favoriteItemsLocalStorageService = inject(FavoriteItemsLocalStorageService);
  private readonly router = inject(Router);

  faHeart = faHeart;
  faEye = faEye;
  faCartShopping = faCartShopping;

  product = input.required<Product>();

  cartItems = computed(() => this.shoppingCartLocalStorageService.cartItems());

  addItem() {
    this.shoppingCartLocalStorageService.addItem({
      ...this.product(),
    });
  }

  checkItemAlreadyExist() {
    return this.shoppingCartLocalStorageService.checkItemAlreadyExist(this.product().publicId);
  }

  checkFavoriteItemAlreadyExist() {
    return this.favoriteItemsLocalStorageService.checkItemAlreadyExist(this.product().publicId);
  }

  toggleFavoriteItem() {
    if (this.checkFavoriteItemAlreadyExist()) {
      this.favoriteItemsLocalStorageService.removeItem(this.product());
    } else {
      this.favoriteItemsLocalStorageService.addItem(this.product());
    }
  }

  onClickNavigate() {
    this.router.navigate(['/products', this.product().publicId]);
  }
}
