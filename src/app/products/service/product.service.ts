import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './../models/product';
import { products } from './../store/products.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  private readonly isLocal = true;

  constructor() { }

  load(): Observable<Product[]> {
    if (this.isLocal) {
      for (let num = 1; num <= 10; num += 1) {
        this.addProducts(num);
      }
      return of(this.products);
    }
    return of([]);
  }

  private addProducts(i: number): void {
    this.products.push({
      id: i,
      price: (Math.random() * (0.0 - 10.0) + 10.0).toFixed(2),
      name: ['Coffee'][Math.floor(Math.random() * 1)],
      description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)],
      image: i
    });
  }
}
