import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Product } from '../../../admin/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteItemsLocalStorageService {
  private readonly key = 'ng_e_commerce_favorite_items';
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  favoriteItems = signal<Product[]>([]);

  constructor() {
    if (this.isBrowser) {
      this.favoriteItems.set(this.loadItems());
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
    this.favoriteItems.set(items);
  }

  addItem(item: Product) {
    const items = [...this.favoriteItems()];
    items.push(item);
    this.saveItems(items);
  }

  removeItem(item: Product) {
    const newItems = this.favoriteItems().filter(i => i.publicId !== item.publicId);
    this.saveItems(newItems);
  }

  updateItem(item: Product) {
    const newItems = this.favoriteItems().map(i => {
      if (i.publicId !== item.publicId) {
        return i;
      } else {
        return item;
      }
    });
    this.saveItems(newItems);
  }

  getAllItems(): Product[] {
    return this.favoriteItems();
  }

  clearItems() {
    if (!this.isBrowser) return;
    localStorage.removeItem(this.key);
    this.favoriteItems.set([]);
  }

  checkItemAlreadyExist(publicId: string) {
    return this.favoriteItems().some(ct => ct.publicId === publicId);
  }
}
