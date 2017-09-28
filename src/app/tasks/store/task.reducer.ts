import { TaskAction, TaskActions } from './task.actions';
import { taskAdapter, taskInitialState, TaskState } from './task.state';

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
      return {
        ...taskAdapter.addMany(action.payload, state),
        isLoading: false,
        error: null
      };
    }

    case TaskActions.CREATE_SUCCESS: {
      return {
        ...taskAdapter.addOne(action.payload, state),
        error: null
      };
    }

    case TaskActions.UPDATE_SUCCESS: {
      return {
        ...taskAdapter.updateOne({id: action.payload.id, changes: action.payload}, state),
        error: null
      };
    }

    case TaskActions.REMOVE_SUCCESS: {
      return {
        ...taskAdapter.removeOne(action.payload.id, state),
        error: null,
      };
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
