import { Injectable, signal } from '@angular/core';
import { Product } from '../../../admin/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class FavoriteItemsLocalStorageService {
  private readonly key = 'ng_e_commerce_favorite_items';

  favoriteItems = signal<Product[]>(this.loadItems());

  private loadItems(): Product[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  private saveItems(items: Product[]) {
    localStorage.setItem(this.key, JSON.stringify(items));
    this.favoriteItems.set(items);
  }

  addItem(item: Product) {
    const items = [...this.favoriteItems()];
    items.push(item);
    this.saveItems(items);
  }

  removeItem(item: Product) {
    // Use publicId for identification, matching your Product model
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

  clearItems() {
    localStorage.removeItem(this.key);
    this.favoriteItems.set([]);
  }

  checkItemAlreadyExist(publicId: string) {
    return this.favoriteItems().some(ct => ct.publicId === publicId);
  }
}
