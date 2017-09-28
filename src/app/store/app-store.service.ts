import { Action, Store } from '@ngrx/store';

import { AppState } from './app.reducer';

export abstract class StoreService {
  protected store: Store<AppState>;

  protected dispatchAction(action: Action) {
    this.store.dispatch(action);
  }

  /* in case you need to handle CRUD actions in all services
  these methods will need to be implemented by feature service */
  abstract dispatchLoadAction();
  abstract dispatchCreateAction(record: any);
  abstract dispatchUpdateAction(record: any);
  abstract dispatchRemoveAction({ id: any });
}
