export interface TaskModuleState {
  task: TaskState;
}

export interface TaskState {
  tasks: any[];
  isLoading: boolean;
  error: any;
}

export const taskInitialState: TaskState = {
  tasks: [],
  isLoading: true,
  error: null
};
