import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../admin/model/product.model';
import { Page } from '../model/request.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:8080/api';

    // === USERS ===
    getAuthenticatedUser(): Observable<any> {
        return this.http.get(`${this.baseUrl}/users/authenticated?forceResync=true`);
    }

    // === ORDERS ===
    getUserOrders(): Observable<any> {
        return this.http.get(`${this.baseUrl}/orders/user`);
    }


    getAdminOrders(): Observable<any> {
        return this.http.get(`${this.baseUrl}/orders/admin`);
    }

    // === CATEGORIES ===
    getAdminCategories(): Observable<any> {
        return this.http.get(`${this.baseUrl}/categories`);
    }

    createCategory(category: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/categories`, category);
    }

    // === PRODUCTS SHOP (FOR USERS) ===
    getFeaturedProducts(): Observable<any> {
        return this.http.get(`${this.baseUrl}/products-shop/featured`);
    }

    getProductById(publicId: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/products-shop/find-one?publicId=${publicId}`);
    }

    getRelatedProducts(publicId: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/products-shop/related?publicId=${publicId}`);
    }

    filterProducts(categoryId: string, productSizes?: string[]): Observable<any> {
        let params = new HttpParams().set('categoryId', categoryId);

        if (productSizes) {
            productSizes.forEach(size => {
                params = params.append('productSizes', size);
            });
        }

        return this.http.get(`${this.baseUrl}/products-shop/filter`, { params });
    }

    // === PRODUCTS ADMIN ===
    getAdminProducts(): Observable<any> {
        return this.http.get(`${this.baseUrl}/products`);
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Page<Product>>('/api/products-shop/featured').pipe(
            map((page) => page.content)
        );
    }

    createAdminProduct(formData: FormData): Observable<any> {
        return this.http.post(`${this.baseUrl}/products`, formData);
    }

    deleteAdminProduct(publicId: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/products`, { params: { publicId } });
    }

    deleteOrder(publicId: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/orders`, { params: { publicId } });
    }
}
