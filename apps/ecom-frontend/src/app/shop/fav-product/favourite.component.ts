import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Product } from '../../admin/model/product.model';
import { FavoriteItemsLocalStorageService } from '../../shared/service/local-storage/favorite-items-local-storage.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
    selector: 'ecom-favourite-items',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './favourite.component.html',
    styleUrl: './favourite.component.scss',
})
export class FavouriteComponent implements OnInit {
    favoriteItems: Product[] = [];
    private isBrowser: boolean;
    private platformId: Object;

    constructor(
        private readonly favoriteService: FavoriteItemsLocalStorageService
    ) {
        this.platformId = inject(PLATFORM_ID);
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit(): void {
        if (this.isBrowser) {
            this.favoriteItems = this.favoriteService.getAllItems();
        }
    }

    removeFromFavorites(product: Product): void {
        if (this.isBrowser) {
            this.favoriteService.removeItem(product);
            this.favoriteItems = this.favoriteItems.filter(
                item => item.publicId !== product.publicId
            );
        }
    }

    trackByProductId(index: number, product: Product): string {
        return product.publicId;
    }

    handleFavoriteToggled(product: Product): void {
        this.removeFromFavorites(product);
    }

}