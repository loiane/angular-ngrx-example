import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import { TaskService } from './../services/task.service';
import * as task from './task.actions';
import { CreateAction, UpdateAction } from './task.actions';

@Injectable()
export class TaskEffects {
  constructor(private api: TaskService, private actions$: Actions) {}

  @Effect()
  loadAction$ = this.actions$
    .ofType<task.LoadAction>(task.TaskActions.LOAD)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .load()
          .pipe(
            map(res => new task.LoadSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  createAction$ = this.actions$
    .ofType<task.CreateAction>(task.TaskActions.CREATE)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .create(payload)
          .pipe(
            map(res => new task.CreateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  updateAction$ = this.actions$
    .ofType<task.UpdateAction>(task.TaskActions.UPDATE)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .update(payload)
          .pipe(
            map(res => new task.UpdateSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  @Effect()
  removeAction$ = this.actions$
    .ofType<task.RemoveAction>(task.TaskActions.REMOVE)
    .pipe(
      map(action => action.payload),
      switchMap(payload =>
        this.api
          .remove(payload.id)
          .pipe(
            map(res => new task.RemoveSuccessAction(res)),
            catchError(error => this.handleError(error))
          )
      )
    );

  private handleError(error) {
    return of(new task.ErrorAction(error));
  }
}
