import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, inject, input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../admin/model/product.model';
import { Oauth2Service } from '../../auth/oauth2.service';
import { FavoriteItemsLocalStorageService } from '../../shared/service/local-storage/favorite-items-local-storage.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'ecom-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  private readonly cartService = inject(CartService);
  private readonly favoriteItemsLocalStorageService = inject(FavoriteItemsLocalStorageService);
  private readonly router = inject(Router);
  oauth2Service = inject(Oauth2Service);
  @Output() favoriteToggled = new EventEmitter<Product>();

  connectedUserQuery = this.oauth2Service.connectedUserQuery;
  faHeart = faHeart;
  faEye = faEye;
  faCartShopping = faCartShopping;
  product = input.required<Product>();

  isInCart = computed(() => {
    const cart = this.cartService['addedToCart$'].getValue();
    return cart.some(item => item.publicId === this.product().publicId);
  });

  addItem(): void {
    this.cartService.addToCart(this.product().publicId);
  }

  login(): void {
    this.oauth2Service.login();
    this.connectedUserQuery?.status() === 'success'
      ? this.handleAddToCartWithLogin()
      : this.showLoginFailedMessage();
  }

  isConnected(): boolean {
    return (
      this.connectedUserQuery?.status() === 'success' &&
      this.connectedUserQuery?.data()?.email !== this.oauth2Service.notConnected
    );
  }

  checkFavoriteItemAlreadyExist(): boolean {
    return this.favoriteItemsLocalStorageService.checkItemAlreadyExist(this.product().publicId);
  }

  onClickNavigate(): void {
    this.router.navigate(['product', this.product().publicId]);
  }

  handleAddToCartWithLogin(): void {
    this.addItem();
  }

  showLoginFailedMessage(): void {
    console.warn('Login failed. Please try again.');
  }

  toggleFavoriteItem(): void {
    if (this.checkFavoriteItemAlreadyExist()) {
      this.favoriteItemsLocalStorageService.removeItem(this.product());
    } else {
      this.favoriteItemsLocalStorageService.addItem(this.product());
    }

    this.favoriteToggled.emit(this.product());
  }

  get isFavorite(): boolean {
    return this.favoriteItemsLocalStorageService.checkItemAlreadyExist(this.product().publicId);
  }

  getFavoriteIconClass(): string {
    if (!this.isFavorite) return 'text-gray-500';
    return 'text-red-400';
  }
}
