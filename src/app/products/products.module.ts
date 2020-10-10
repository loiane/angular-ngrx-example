import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store/product.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer)
  ]
})
export class ProductsModule { }
