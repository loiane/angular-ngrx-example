import { error } from './../../store/products.selectors';
import { Product } from './../../models/product';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/product.reducer';
import * as fromActions from '../../store/product.actions';
import * as fromSelector from '../../store/products.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  products$: Observable<Product[]>;

  constructor(private store: Store<fromStore.ProductState>) {
    this.store.dispatch(fromActions.loadProducts({products: [{id: 1, name: '1'},{id: 2, name: '2'}]}));
    this.products$ = this.store.select(fromSelector.products);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
    // this.store.select(state => state).subscribe(data => {
    //   console.log('data', data);
    // });
  }

  ngOnInit(): void { }

}
