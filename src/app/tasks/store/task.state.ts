export interface TaskState {
    tasks: any[];
    isLoading: boolean;
    selectedTask: any;
    error: any;
}

export const taskInitialState: TaskState = {
    tasks: [],
    isLoading: true,
    selectedTask: null,
    error: null
};
