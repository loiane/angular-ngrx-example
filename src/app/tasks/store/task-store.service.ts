import 'rxjs/add/operator/filter';

import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

import { StoreService } from './../../store/app-store.service';
import { AppState } from './../../store/app.reducer';
import * as task from './task.actions';
import { taskAdapter, TaskState } from './task.state';

@Injectable()
export class TaskStoreService extends StoreService {

  protected readonly STATE = 'task';

  private tasksState = createFeatureSelector<TaskState>('task');

  private selectors = taskAdapter.getSelectors(this.tasksState);
  private selectedTaskId = (state: TaskState) => state.selectedTaskId;

  // tslint:disable-next-line:member-ordering
  private selectCurrentTaskId = createSelector(this.tasksState, this.selectedTaskId);

  private selectIsLoading = (state: TaskState) => state.isLoading;
  // tslint:disable-next-line:member-ordering
  private isLoading = createSelector(this.tasksState, this.selectIsLoading);

  private selectError = (state: TaskState) => state.error;
  // tslint:disable-next-line:member-ordering
  private error = createSelector(this.tasksState, this.selectError);

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
    return this.store.select(this.selectors.selectAll);
  }

  getIsLoading() {
    return this.store.select(this.isLoading);
  }

  getError() {
    return this.store.select(this.error);
  }

  findById(record: {id}) {
    return this.getTasks()[record['id']];
  }
}
