import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsComponent } from './container/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [ProductsComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
