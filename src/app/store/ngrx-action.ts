import { Action } from '@ngrx/store';

export class NgRxAction<T> implements Action {
  readonly type: string;
  constructor(public payload?: T) {}
}
