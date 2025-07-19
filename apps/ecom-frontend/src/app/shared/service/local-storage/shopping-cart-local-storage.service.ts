import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { computed, signal } from '@angular/core';
import { Product } from '../../../admin/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartLocalStorageService {
  private readonly key = 'ng_e_commerce_cart_items';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  cartItems = signal<Product[]>([]);
  cartItemQuantity = computed(() => {
    return this.cartItems().reduce((a, c) => {
      a += (c as Product & { quantity?: number })?.quantity ?? 0;
      return a;
    }, 0);
  });

  constructor() {
    if (this.isBrowser) {
      this.cartItems.set(this.loadItems());
    }
  }

  private loadItems(): Product[] {
    if (!this.isBrowser) return [];
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  private saveItems(items: Product[]) {
    if (!this.isBrowser) return;
    localStorage.setItem(this.key, JSON.stringify(items));
    this.cartItems.set(items);
  }

  addItem(item: Product) {
    const items = [...this.cartItems()];
    items.push(item);
    this.saveItems(items);
  }

  removeItem(item: Product) {
    const newItems = this.cartItems().filter(i => i.publicId !== item.publicId);
    this.saveItems(newItems);
  }

  updateItem(item: Product) {
    const newItems = this.cartItems().map(i => {
      return i.publicId !== item.publicId ? i : item;
    });
    this.saveItems(newItems);
  }

  clearItems() {
    if (!this.isBrowser) return;
    localStorage.removeItem(this.key);
    this.cartItems.set([]);
  }

  checkItemAlreadyExist(publicId: string) {
    return this.cartItems().some(ct => ct.publicId === publicId);
  }
}
