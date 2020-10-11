import { products } from './products.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime, delay } from 'rxjs/operators';

import { ProductService } from '../service/product.service';
import { loadProducts, requestLoadProducts } from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private service: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadProducts),
      switchMap(action =>
        this.service.load().pipe(
          delay(3000),
          map(data => loadProducts({products: data}))
      ))
    )
  );
}
