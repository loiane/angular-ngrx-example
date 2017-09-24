import { TaskAction, TaskActions } from './task.actions';
import { taskInitialState, TaskState } from './task.state';

export function taskReducer(
  state = taskInitialState,
  action: TaskAction
): TaskState {

  switch (action.type) {
    case TaskActions.LOAD: {
      return Object.assign({}, state, {
        isLoading: true,
        isLoaded: false,
        hasError: false,
        error: null
      });
    }

    case TaskActions.LOAD_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
        tasks: action.payload
      });
    }

    case TaskActions.CREATE_SUCCESS: {
      return Object.assign({}, state, {
        error: null,
        tasks: [...state.tasks, action.payload]
      });
    }

    case TaskActions.UPDATE_SUCCESS: {
      return Object.assign({}, state, {
        error: null,
        tasks: state.tasks.map((task: { id: any }) => {
          return task.id === action.payload.id ? action.payload : task;
        })
      });
    }

    case TaskActions.REMOVE_SUCCESS: {
      return Object.assign({}, state, {
        error: null,
        tasks: state.tasks.filter((task: { id: any }) => {
          return task.id !== action.payload.id;
        })
      });
    }

    case TaskActions.ERROR: {
      return Object.assign({}, state, {
        error: action.payload.message
      });
    }

    default: {
      return state;
    }
  }
}
