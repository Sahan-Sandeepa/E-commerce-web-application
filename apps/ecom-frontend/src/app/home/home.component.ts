import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../admin/model/product.model';
import { FooterComponent } from '../layout/footer/footer.component';
import { ProductCardSkeletonComponent } from '../shared/assets/card-skeleton.component';
import { STATIC_CATEGORY_IDS } from '../shared/assets/category-mapping-constant';
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

export class HomeComponent implements OnInit {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly apiService = inject(ApiService);
  private route = inject(ActivatedRoute)

  productsResource = signal<Product[]>([]);
  loading = signal(true);
  displayCount = signal(9);

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
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const categoryName = params['category'] as keyof typeof STATIC_CATEGORY_IDS;
      const categoryId = STATIC_CATEGORY_IDS[categoryName] || null;
      this.loadProducts(categoryId);
    });
  }

  loadProducts(categoryId: string | null): void {
    this.loading.set(true);
    if (!categoryId) {
      this.apiService.getFeaturedProducts().subscribe({
        next: (res) => {
          this.productsResource.set(res.content || []);
          this.loading.set(false);
        },
        error: (err) => {
          console.error('[API Error] Featured:', err);
          this.loading.set(false);
        },
      });
    } else {
      this.apiService.filterProducts(categoryId).subscribe({
        next: (res) => {
          this.productsResource.set(res.content || []);
          this.loading.set(false);
        },
        error: (err) => {
          console.error('[API Error] Filtered:', err);
          this.loading.set(false);
        },
      });
    }
  }

  showMore() {
    this.displayCount.set(this.displayCount() + 9);
  }

  get visibleProducts() {
    return this.productsResource().slice(0, this.displayCount());
  }

  isShowMoreVisible() {
    return this.displayCount() < this.productsResource().length;
  }

  isLoading() {
    return this.loading();
  }

  trackByFn(index: number, item: any): any {
    return index;
  }

  trackByProductId(index: number, product: Product): string {
    return product.publicId;
  }
}