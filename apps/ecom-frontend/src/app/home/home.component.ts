import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Product } from '../admin/model/product.model';
import { FooterComponent } from '../layout/footer/footer.component';
import { ProductCardSkeletonComponent } from '../shared/assets/card-skeleton.component';
import { ApiService } from '../shared/service/api.service';
import { ProductCardComponent } from '../shop/product-card/product-card.component';

@Component({
  selector: 'ecom-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductCardComponent,
    ProductCardSkeletonComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly apiService = inject(ApiService);

  productsResource = signal<Product[]>([]);
  loading = signal(true);

  constructor() {
    this.title.setTitle('Home');
    this.meta.updateTag({
      name: 'description',
      content:
        "Your Modern Ecommerce — A minimalist, responsive, Angular + TailwindCSS template for professional shops.",
    });
    this.meta.updateTag({ property: 'og:title', content: 'Home' });
    this.meta.updateTag({
      property: 'og:description',
      content:
        "Your Modern Ecommerce — A minimalist, responsive, Angular + TailwindCSS template for professional shops.",
    });
    this.loadProducts();
  }

  private loadProducts() {
    this.apiService.getProducts().subscribe({
      next: (products) => {
        this.productsResource.set(products);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      },
    });
  }

  isLoading() {
    return this.loading();
  }
}
