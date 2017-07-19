import { Injectable } from '@angular/core';
import { ActionCreator } from '../../store/action-creator';
import { type } from '../../store/util';

@Injectable()
export class TaskActions {
  static Types = {
    LOAD: type('[Task] LOAD Requested'),
    LOAD_SUCCESS: type('[Task] LOAD Success'),

    CREATE: type('[Task] CREATE Requested'),
    CREATE_SUCCESS: type('[Task] CREATE Success'),

    UPDATE: type('[Task] UPDATE Requested'),
    UPDATE_SUCCESS: type('[Task] UPDATE Success'),

    REMOVE: type('[Task] REMOVE Requested'),
    REMOVE_SUCCESS: type('[Task] REMOVE Success'),

    ERROR: type('[Task] Error')
  };

  loadAction = ActionCreator.create(TaskActions.Types.LOAD);
  loadSuccessAction = ActionCreator.create<any[]>(TaskActions.Types.LOAD_SUCCESS);

  createAction = ActionCreator.create<any>(TaskActions.Types.CREATE);
  createSuccessAction = ActionCreator.create<any>(TaskActions.Types.CREATE_SUCCESS);

  updateAction = ActionCreator.create<any>(TaskActions.Types.UPDATE);
  updateSuccessAction = ActionCreator.create<any>(TaskActions.Types.UPDATE_SUCCESS);

  removeAction = ActionCreator.create<{id}>(TaskActions.Types.REMOVE);
  removeSuccessAction = ActionCreator.create(TaskActions.Types.REMOVE_SUCCESS);

  errorAction = ActionCreator.create<any>(TaskActions.Types.ERROR);
}
