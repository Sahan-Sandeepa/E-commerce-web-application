import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ClickOutside } from 'ngxtension/click-outside';
import { lastValueFrom } from 'rxjs';
import { Oauth2Service } from '../../auth/oauth2.service';
import { UserProductService } from '../../shared/service/user-product.service';
import { CartService } from '../../shop/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FaIconComponent, ClickOutside, FontAwesomeModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  oauth2Service = inject(Oauth2Service);
  productService = inject(UserProductService);
  cartService = inject(CartService);

  nbItemsInCart = 0;

  connectedUserQuery = this.oauth2Service.connectedUserQuery;

  categoryQuery = injectQuery(() => ({
    queryKey: ['categories'],
    queryFn: () => lastValueFrom(this.productService.findAllCategories()),
  }));

  login(): void {
    this.closeDropDownMenu();
    this.oauth2Service.login();
  }

  logout(): void {
    this.closeDropDownMenu();
    this.oauth2Service.logout();
  }

  isConnected(): boolean {
    return (
      this.connectedUserQuery?.status() === 'success' &&
      this.connectedUserQuery?.data()?.email !== this.oauth2Service.notConnected
    );
  }

  cartItemQuantity(): number {
    this.listenToCart();
    return this.nbItemsInCart;
  }

  closeDropDownMenu() {
    const bodyElement = document.activeElement as HTMLBodyElement;
    if (bodyElement) {
      bodyElement.blur();
    }
  }

  closeMenu(menu: HTMLDetailsElement) {
    menu.removeAttribute('open');
  }

  ngOnInit(): void {
    this.listenToCart();
  }

  private listenToCart() {
    this.cartService.addedToCart.subscribe((productsInCart) => {
      this.nbItemsInCart = productsInCart.reduce(
        (acc, product) => acc + product.quantity,
        0
      );
    });
  }
}