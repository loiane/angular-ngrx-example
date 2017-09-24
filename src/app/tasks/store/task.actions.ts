import { NgRxAction } from '../../store/ngrx-action';
import { Task } from './../model/task';

export enum TaskActions {
  LOAD = '[Task] LOAD Requested',
  LOAD_SUCCESS = '[Task] LOAD Success',
  CREATE = '[Task] CREATE Requested',
  CREATE_SUCCESS = '[Task] CREATE Success',
  UPDATE = '[Task] UPDATE Requested',
  UPDATE_SUCCESS = '[Task] UPDATE Success',
  REMOVE = '[Task] REMOVE Requested',
  REMOVE_SUCCESS = '[Task] REMOVE Success',
  ERROR = '[Task] Error'
}

export class LoadAction extends NgRxAction<any> { type = TaskActions.LOAD; }
export class LoadSuccessAction extends NgRxAction<Task[]> { type = TaskActions.LOAD_SUCCESS; }

export class CreateAction extends NgRxAction<any> { type = TaskActions.CREATE; }
export class CreateSuccessAction extends NgRxAction<Task> { type = TaskActions.CREATE_SUCCESS; }

export class UpdateAction extends NgRxAction<Task> { type = TaskActions.UPDATE; }
export class UpdateSuccessAction extends NgRxAction<Task> { type = TaskActions.UPDATE_SUCCESS; }

export class RemoveAction extends NgRxAction<{id}> { type = TaskActions.REMOVE; }
export class RemoveSuccessAction extends NgRxAction<Task> { type = TaskActions.REMOVE_SUCCESS; }

export class ErrorAction extends NgRxAction<any> { type = TaskActions.ERROR; }

export type TaskAction =
  LoadAction | LoadSuccessAction |
  CreateAction | CreateSuccessAction |
  UpdateAction | UpdateSuccessAction |
  RemoveAction | RemoveSuccessAction |
  ErrorAction;


