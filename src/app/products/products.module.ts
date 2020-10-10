import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductsComponent } from './container/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductEffects } from './store/product.effects';
import * as fromProduct from './store/product.reducer';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductsComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule { }
