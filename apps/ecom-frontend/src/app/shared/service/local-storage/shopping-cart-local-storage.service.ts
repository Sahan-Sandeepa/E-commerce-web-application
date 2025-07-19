import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../../admin/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartLocalStorageService {
  private readonly key = 'ng_e_commerce_cart_items';

  cartItems = signal<Product[]>([]);
  cartItemQuantity = computed(() => {
    return this.cartItems().reduce((a, c) => {
      a += (c as Product & { quantity?: number })?.quantity ?? 0;
      return a;
    }, 0);
  });

  constructor() {
    this.cartItems.set(this.loadItems());
  }

  private loadItems(): Product[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  private saveItems(items: Product[]) {
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
      if (i.publicId !== item.publicId) {
        return i;
      } else {
        return item;
      }
    });
    this.saveItems(newItems);
  }

  clearItems() {
    localStorage.removeItem(this.key);
    this.cartItems.set([]);
  }

  checkItemAlreadyExist(publicId: string) {
    return this.cartItems().some(ct => ct.publicId === publicId);
  }
}