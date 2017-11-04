import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { StoreService } from './../../store/app-store.service';
import { AppState } from './../../store/app.reducer';
import * as task from './task.actions';
import * as state from './task.state';

@Injectable()
export class TaskStoreService extends StoreService {
  private tasksState = createFeatureSelector<state.TaskState>('task');

  private selectors = state.taskAdapter.getSelectors(this.tasksState);

  private selectCurrentTaskId = createSelector(
    this.tasksState,
    state.selectedTaskId
  );
  private isLoading = createSelector(this.tasksState, state.selectIsLoading);
  private error = createSelector(this.tasksState, state.selectError);

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchLoadAction() {
    this.dispatchAction(new task.LoadAction());
  }

  dispatchCreateAction(record: any) {
    this.dispatchAction(new task.CreateAction(record));
  }

  dispatchUpdateAction(record: any) {
    this.dispatchAction(new task.UpdateAction(record));
  }

  dispatchRemoveAction(id) {
    this.dispatchAction(new task.RemoveAction(id));
  }

  getTasks() {
    return this.store.select(this.selectors.selectAll);
  }

  getIsLoading() {
    return this.store.select(this.isLoading);
  }

  getError() {
    return this.store.select(this.error);
  }

  findById(record: { id }) {
    return this.getTasks()[record['id']];
  }

  getCurrentTaskSelected() {
    return Observable.combineLatest(
      this.getTasks(),
      this.store.select(this.selectCurrentTaskId),
      (tasks, selectedId) => selectedId.map(id => tasks[id])
    );
  }
}
