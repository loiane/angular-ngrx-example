import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { TaskService } from './../services/task.service';
import * as task from './task.actions';
import { CreateAction, UpdateAction } from './task.actions';

@Injectable()
export class TaskEffects {
  constructor(private api: TaskService, private actions$: Actions) {}

  @Effect()
  loadAction$ = this.actions$
    .ofType<task.LoadAction>(task.TaskActions.LOAD)
    .map(action => action.payload)
    .switchMap(payload =>
      this.api
        .load()
        .map(res => new task.LoadSuccessAction(res))
        .catch(error => this.handleError(error))
    );

  @Effect()
  createAction$ = this.actions$
    .ofType<task.CreateAction>(task.TaskActions.CREATE)
    .map(action => action.payload)
    .switchMap(payload =>
      this.api
        .create(payload)
        .map(res => new task.CreateSuccessAction(res))
        .catch(error => this.handleError(error))
    );

  @Effect()
  updateAction$ = this.actions$
    .ofType<task.UpdateAction>(task.TaskActions.UPDATE)
    .map(action => action.payload)
    .switchMap(payload =>
      this.api
        .update(payload)
        .map(res => new task.UpdateSuccessAction(res))
        .catch(error => this.handleError(error))
    );

  @Effect()
  removeAction$ = this.actions$
    .ofType<task.RemoveAction>(task.TaskActions.REMOVE)
    .map(action => action.payload)
    .switchMap(payload =>
      this.api
        .remove(payload.id)
        .map(res => new task.RemoveSuccessAction(res))
        .catch(error => this.handleError(error))
    );

  private handleError(error) {
    return Observable.of(new task.ErrorAction(error));
  }
}
