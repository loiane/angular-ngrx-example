import { Action, createReducer, on } from '@ngrx/store';
import * as ShoppingCartActions from './header.actions';

export const headerFeatureKey = 'header';

export interface ShoppingCartState {
  cartCount: number;
}

export const initialState: ShoppingCartState = {
  cartCount: 0
};

export const reducer = createReducer(
  initialState,
  on(ShoppingCartActions.addToCart, state => ({ cartCount: state.cartCount + 1}))
);
