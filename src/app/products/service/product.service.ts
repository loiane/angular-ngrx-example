import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  load(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }

  search(searchQuery: string): Observable<Product[]> {
    return this.load().pipe(
      map((list: Product[]) => list.filter((value) => value.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1))
    );
  }
}
