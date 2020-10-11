import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './header.reducer';

const cartSelector = createFeatureSelector<fromStore.ShoppingCartState>(fromStore.headerFeatureKey);
const selectCartCount = (state: fromStore.ShoppingCartState) => state.cartCount;

export const cartCount = createSelector(cartSelector, selectCartCount);

