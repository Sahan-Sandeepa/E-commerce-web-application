import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { ClickOutside } from 'ngxtension/click-outside';
import { lastValueFrom } from 'rxjs';
import { Oauth2Service } from '../../auth/oauth2.service';
import { DropdownComponent } from '../../shared/assets/dropdown.component';
import { UserProductService } from '../../shared/service/user-product.service';
import { CartService } from '../../shop/cart.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FaIconComponent, ClickOutside, FontAwesomeModule, RouterModule, DropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  oauth2Service = inject(Oauth2Service);
  productService = inject(UserProductService);
  cartService = inject(CartService);

  isHoveringProducts = false;
  isProductsDropdownClicked = false;
  isHoveringUser = false;
  isUserDropdownClicked = false;
  nbItemsInCart = 0;
  connectedUserQuery = this.oauth2Service.connectedUserQuery;
  currentTheme: 'light' | 'dark' = 'light';
  currentOpenDropdown: string | null = null;


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
    console.log('connectedUserQuery?.data()?.imageUrl', this.connectedUserQuery?.data()?.email);
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
    if (isPlatformBrowser(this.platformId)) {
      const storedTheme = localStorage.getItem('theme');
      this.currentTheme = storedTheme === 'dark' ? 'dark' : 'light';
    }
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

  onCategoryClick() {
    this.isProductsDropdownClicked = false;
    this.isHoveringProducts = false;
  }

  get isAdmin(): boolean {
    return this.connectedUserQuery?.status() === 'success' &&
      this.oauth2Service.hasAnyAuthorities(this.connectedUserQuery?.data()!, 'ROLE_ADMIN');
  }

  toggleTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    if (isPlatformBrowser(this.platformId)) {
      const html = document.documentElement;
      if (theme === 'dark') {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  onMouseEnterUser() {
    if (!this.isUserDropdownClicked) {
      this.isHoveringUser = true;
    }
  }

  onMouseLeaveUser() {
    if (!this.isUserDropdownClicked) {
      this.isHoveringUser = false;
    }
  }

  toggleUserDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.isUserDropdownClicked = !this.isUserDropdownClicked;
    this.isHoveringUser = this.isUserDropdownClicked;
  }

  onUserDropdownItemClick() {
    this.isUserDropdownClicked = false;
    this.isHoveringUser = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.isUserDropdownClicked = false;
      this.isHoveringUser = false;
    }
  }

  get hasCategories(): boolean {
    return !!this.categoryQuery.data()?.content && this.categoryQuery.data()!.content.length > 0;
  }

  @HostListener('document:click')
  onDocumentClickOutside() {
    this.currentOpenDropdown = null;
  }

  toggleDropdown(label: string, event: MouseEvent) {
    event.stopPropagation();
    this.currentOpenDropdown = this.currentOpenDropdown === label ? null : label;
  }

  isDropdownOpen(label: string): boolean {
    return this.currentOpenDropdown === label;
  }
}