import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCartActions from '../../../header/store/header.actions';
import * as fromActions from '../../store/product.actions';
import * as fromStore from '../../store/product.reducer';
import * as fromSelector from '../../store/products.selectors';
import { Product } from './../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  products$: Observable<Product[]>;

  constructor(private store: Store<fromStore.ProductState>) {
    this.store.dispatch(fromActions.requestLoadProducts());
    this.products$ = this.store.select(fromSelector.products);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
    // this.store.select(state => state).subscribe(data => {
    //   console.log('data', data);
    // });
  }

  ngOnInit(): void { }

  addProductCart(product: Product): void {
    this.store.dispatch(fromCartActions.addToCart());
  }

}
