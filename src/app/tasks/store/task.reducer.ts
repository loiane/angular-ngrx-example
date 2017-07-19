import { Action } from '@ngrx/store';
import { TaskState, taskInitialState } from './task.state';
import { TaskActions } from './task.actions';

export function taskReducer(
  state = taskInitialState,
  action: Action & { payload?: any }
): TaskState {

  switch (action.type) {
    case TaskActions.Types.LOAD: {
      return Object.assign({}, state, {
        isLoading: true,
        isLoaded: false,
        hasError: false,
        error: null
      });
    }

    case TaskActions.Types.LOAD_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        tasks: action.payload
      });
    }

    case TaskActions.Types.CREATE_SUCCESS: {
      return Object.assign({}, state, {
        error: null,
        tasks: [...state.tasks, action.payload]
      });
    }

    case TaskActions.Types.UPDATE_SUCCESS: {
      return Object.assign({}, state, {
        error: null,
        tasks: state.tasks.map((task: { id: any }) => {
          return task.id === action.payload.id ? action.payload : task;
        })
      });
    }

    case TaskActions.Types.REMOVE_SUCCESS: {
      return Object.assign({}, state, {
        error: null,
        tasks: state.tasks.filter((task: { id: any }) => {
          return task.id !== action.payload.id;
        })
      });
    }

    case TaskActions.Types.ERROR: {
      return Object.assign({}, state, {
        error: action.payload.message
      });
    }

    default: {
      return state;
    }
  }
}
