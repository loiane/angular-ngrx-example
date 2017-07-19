import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { TaskService } from './../services/task.service';
import { TaskActions } from './task.actions';

@Injectable()
export class TaskEffects {

  constructor(
    private api: TaskService,
    private actions: TaskActions,
    private actions$: Actions
  ) {}

  @Effect()
  loadAction$: Observable<Action> = this.actions$
    .ofType(TaskActions.Types.LOAD)
    .map(toPayload)
    .switchMap(payload =>
      this.api
        .load()
        .map(res => this.actions.loadSuccessAction(res))
        .catch(error => this.handleError(error))
    ) as Observable<Action>;

  @Effect()
  createAction$: Observable<Action> = this.actions$
    .ofType(TaskActions.Types.CREATE)
    .map(toPayload)
    .switchMap(payload =>
      this.api
        .create(payload)
        .map(res => this.actions.createSuccessAction(res))
        .catch(error => this.handleError(error))
    ) as Observable<Action>;

  @Effect()
  updateAction$: Observable<Action> = this.actions$
    .ofType(TaskActions.Types.UPDATE)
    .map(toPayload)
    .switchMap(payload =>
      this.api
        .update(payload)
        .map(res => this.actions.updateSuccessAction(res))
        .catch(error => this.handleError(error))
    ) as Observable<Action>;

  @Effect()
  removeAction$: Observable<Action> = this.actions$
    .ofType(TaskActions.Types.REMOVE)
    .map(toPayload)
    .switchMap(payload =>
      this.api
        .remove(payload.id)
        .map(res => this.actions.removeSuccessAction(res))
        .catch(error => this.handleError(error))
    ) as Observable<Action>;

  private handleError(error) {
    return Observable.of(this.actions.errorAction(error));
  }
}
