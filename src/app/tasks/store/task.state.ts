import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Task } from './../model/task';

export interface TaskState extends EntityState<Task> {
    isLoading: boolean;
    selectedTaskId: any;
    error: any;
}

export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (task: Task) => task.id,
  sortComparer: false,
});

export const taskInitialState: TaskState = taskAdapter.getInitialState({
  isLoading: true,
  selectedTaskId: null,
  error: null
});
