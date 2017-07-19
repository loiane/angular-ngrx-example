import { TaskState } from './task.state';
import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { StoreService } from './../../store/app-store.service';
import { AppState } from './../../store/app.state';
import { TaskActions } from './task.actions';
import 'rxjs/add/operator/filter';

@Injectable()
export class TaskStoreService extends StoreService {

  protected readonly STATE = 'task';

  constructor(
    protected store: Store<AppState>,
    private actions: TaskActions,
  ) { super(); }

  dispatchLoadAction() {
    this.dispatchAction(this.actions.loadAction());
  }

  dispatchCreateAction(record: any) {
    this.dispatchAction(this.actions.createAction(record));
  }

  dispatchUpdateAction(record: any)  {
    this.dispatchAction(this.actions.updateAction(record));
  }

  dispatchRemoveAction(id) {
    this.dispatchAction(this.actions.removeAction(id));
  }

  // sample of how to select piece of the state
  getTasks() {
    return this.storeSelectFeatureState()
      .map((state: TaskState) => state.tasks);
  }

  getIsLoading() {
    return this.storeSelectFeatureState()
      .map((state: TaskState) => state.isLoading);
  }

  getError() {
    return this.storeSelectFeatureState()
      .map((state: TaskState) => state.error);
  }

  findById(record: {id}) {
    return this.getTasks()
      .filter(item => item['id'] === record['id']);
  }
}
