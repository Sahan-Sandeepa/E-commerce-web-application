import { Route } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin/category/admin-categories/admin-categories.component';
import { CreateCategoryComponent } from './admin/category/create-category/create-category.component';
import { CreateProductComponent } from './admin/product/create-product/create-product.component';
import { CallbackComponent } from './auth/callback.component';
import { LoginComponent } from './auth/loginComponent';
import { roleCheckGuard } from './auth/role-check.guard';
import { HomeComponent } from './home/home.component';
import { ComingSoonComponent } from './layout/under-construction/coming-soon.component';
import { ComingSoonGuard } from './layout/under-construction/coming-soon.guard';
import { CartSuccessComponent } from './shop/cart-success/cart-success.component';
import { CartComponent } from './shop/cart/cart.component';
import { FavouriteComponent } from './shop/fav-product/favourite.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { ProductsComponent } from './shop/products/products.component';
import { UserOrdersComponent } from './user/user-orders/user-orders.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'admin/categories/list',
    component: AdminCategoriesComponent,
    canActivate: [roleCheckGuard],
    data: {
      authorities: ['ROLE_ADMIN'],
    },
  },
  {
    path: 'admin/categories/create',
    component: CreateCategoryComponent,
    canActivate: [roleCheckGuard],
    data: {
      authorities: ['ROLE_ADMIN'],
    },
  },
  {
    path: 'admin/products/create',
    component: CreateProductComponent,
    canActivate: [roleCheckGuard],
    data: {
      authorities: ['ROLE_ADMIN'],
    },
  },
  {
    path: 'admin/products/list',
    component: AdminProductsComponent,
    canActivate: [roleCheckGuard],
    data: {
      authorities: ['ROLE_ADMIN'],
    },
  },
  {
    path: 'admin/orders/list',
    component: AdminOrdersComponent,
    canActivate: [roleCheckGuard],
    data: {
      authorities: ['ROLE_ADMIN'],
    },
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: 'product/:publicId',
    component: ProductDetailComponent,
  },
  {
    path: 'favourites',
    component: FavouriteComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/success',
    component: CartSuccessComponent,
  },
  {
    path: 'users/orders',
    component: UserOrdersComponent
  },

  /* Under construction routes */

  { path: 'coming-soon', component: ComingSoonComponent },

  // All these are dummy routes using the guard
  { path: 'shipping', component: ComingSoonComponent },
  { path: 'returns', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'faq', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'compare', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'about', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'contact', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'careers', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'press', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'terms', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'privacy', canActivate: [ComingSoonGuard], component: ComingSoonComponent },
  { path: 'cookies', canActivate: [ComingSoonGuard], component: ComingSoonComponent },

  // Optional fallback
  { path: '**', redirectTo: '/coming-soon' }
];
