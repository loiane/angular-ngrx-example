import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  routerReducer: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  routerReducer: routerReducer
};
