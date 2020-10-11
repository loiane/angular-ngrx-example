import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';

import * as fromStore from '../store/header.reducer';
import * as fromSelector from '../store/header.selectors';
import { searchProduct } from './../../products/store/product.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  searchQuery = '';
  cartCount$: Observable<number>;
  destroySub = new Subject();

  constructor(private store: Store<fromStore.ShoppingCartState>) {
    this.cartCount$ = this.store.select(fromSelector.cartCount);
  }

  ngOnInit(): void {
  }

  watchSearch(): void {
    of(this.searchQuery)
      .pipe(
        map(value => value.trim()),
        filter(query => query.length > 3),
        debounceTime(2000),
        distinctUntilChanged(),
        takeUntil(this.destroySub)
      )
      .subscribe(query => this.store.dispatch(searchProduct({searchQuery: query})));
  }

  ngOnDestroy(): void {
    this.destroySub.next(true);
    this.destroySub.complete();
  }

}
