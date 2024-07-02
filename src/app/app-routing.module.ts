import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './main/features/components/cart/cart.component';
// import { ProductListCompnent } from './main/features/components/product-list/product-list.component';
import { ProductListCompnent } from './main/features/components/profuct-list/product-list.component';
import { AddYourProductComponent } from './main/features/components/add-your-product/add-your-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListCompnent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'add-your-product',
    component: AddYourProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
