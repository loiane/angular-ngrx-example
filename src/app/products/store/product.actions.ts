import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Product } from '../models/product';

export const requestLoadProducts = createAction(
  '[Product/API] Request Load Products'
);

export const loadProducts = createAction(
  '[Product/API] Load Products',
  props<{ products: Product[] }>()
);

export const addProduct = createAction(
  '[Product/API] Add Product',
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ product: Update<Product> }>()
);

export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ id: string }>()
);

export const searchProduct = createAction(
  '[Product/API] Search Products',
  props<{ searchQuery: string }>()
);
