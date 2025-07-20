import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cart, CartItemAdd, StripeSession } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly keyCartStorage = 'cart';
  private readonly keySessionId = 'stripe-session-id';

  private readonly platformId = inject(PLATFORM_ID);
  private readonly http = inject(HttpClient);

  private readonly addedToCart$ = new BehaviorSubject<CartItemAdd[]>([]);
  readonly addedToCart = this.addedToCart$.asObservable();

  constructor() {
    const cart = this.getCartFromLocalStorage();
    this.addedToCart$.next(cart);
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private getCartFromLocalStorage(): CartItemAdd[] {
    if (!this.isBrowser()) return [];
    const data = localStorage.getItem(this.keyCartStorage);
    return data ? JSON.parse(data) : [];
  }

  private saveCartToLocalStorage(cart: CartItemAdd[]) {
    if (!this.isBrowser()) return;
    localStorage.setItem(this.keyCartStorage, JSON.stringify(cart));
    this.addedToCart$.next(cart);
  }

  addToCart(publicId: string, command: 'add' | 'remove' = 'add'): void {
    if (!this.isBrowser()) return;

    const cart = this.getCartFromLocalStorage();
    const existing = cart.find(item => item.publicId === publicId);

    if (existing) {
      if (command === 'add') {
        existing.quantity++;
      } else if (command === 'remove') {
        existing.quantity = Math.max(1, existing.quantity - 1);
      }
    } else {
      cart.push({ publicId, quantity: 1 });
    }

    this.saveCartToLocalStorage(cart);
  }

  removeFromCart(publicId: string): void {
    if (!this.isBrowser()) return;

    const cart = this.getCartFromLocalStorage().filter(item => item.publicId !== publicId);
    this.saveCartToLocalStorage(cart);
  }

  clearCart(): void {
    if (!this.isBrowser()) return;
    localStorage.removeItem(this.keyCartStorage);
    this.addedToCart$.next([]);
  }

  getCartDetail(): Observable<Cart> {
    const cart = this.getCartFromLocalStorage();
    const publicIds = cart.map(c => c.publicId).join(',');

    return this.http.get<Cart>(`${environment.apiUrl}/orders/get-cart-details`, {
      params: { productIds: publicIds },
    }).pipe(
      map(response => this.mapQuantity(response, cart))
    );
  }

  private mapQuantity(cart: Cart, cartFromStorage: CartItemAdd[]): Cart {
    for (const item of cartFromStorage) {
      const match = cart.products.find(p => p.publicId === item.publicId);
      if (match) {
        match.quantity = item.quantity;
      }
    }
    return cart;
  }

  initPaymentSession(cart: CartItemAdd[]): Observable<StripeSession> {
    return this.http.post<StripeSession>(`${environment.apiUrl}/orders/init-payment`, cart);
  }

  storeSessionId(sessionId: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.keySessionId, sessionId);
    }
  }

  getSessionId(): string {
    if (!this.isBrowser()) return '';
    return localStorage.getItem(this.keySessionId) ?? '';
  }

  deleteSessionId(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.keySessionId);
    }
  }
}