import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Product } from '../models/product';
import * as ProductActions from './product.actions';

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<Product> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  isLoading: true,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(ProductActions.addProduct,
    (state, action) => adapter.addOne(action.product, state)
  ),
  on(ProductActions.updateProduct,
    (state, action) => adapter.updateOne(action.product, state)
  ),
  on(ProductActions.deleteProduct,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ProductActions.loadProducts,
    (state, action) => adapter.setAll(action.products, {
        ...state,
        isLoading: false
    })
  ),
  on(ProductActions.requestLoadProducts,
    (state, action) => adapter.setAll([], {
      ...state,
      isLoading: true
  })
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectIsLoading = (state: ProductState) => state.isLoading;
export const selectError = (state: ProductState) => state.error;
