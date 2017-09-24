import 'rxjs/add/operator/filter';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { StoreService } from './../../store/app-store.service';
import { AppState } from './../../store/app.reducer';
import * as task from './task.actions';
import { TaskState } from './task.state';

@Injectable()
export class TaskStoreService extends StoreService {

  protected readonly STATE = 'task';

  constructor(
    protected store: Store<AppState>
  ) { super(); }

  dispatchLoadAction() {
    this.dispatchAction(new task.LoadAction());
  }

  dispatchCreateAction(record: any) {
    this.dispatchAction(new task.CreateAction(record));
  }

  dispatchUpdateAction(record: any)  {
    this.dispatchAction(new task.UpdateAction(record));
  }

  dispatchRemoveAction(id) {
    this.dispatchAction(new task.RemoveAction(id));
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
