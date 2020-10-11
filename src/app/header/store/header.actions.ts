import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Header] Add to Cart'
);

export const searchProduct = createAction(
  '[Header] Search Product',
  props<{ data: any }>()
);
