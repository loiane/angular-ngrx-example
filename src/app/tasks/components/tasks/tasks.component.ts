import { TaskStoreService } from './../../store/task-store.service';
import { Task } from './../../model/task';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private taskStoreService: TaskStoreService) {}

  ngOnInit() {
    this.taskStoreService.dispatchLoadAction();
    this.tasks$ = this.taskStoreService.getTasks();
    this.isLoading$ = this.taskStoreService.getIsLoading();
    this.error$ = this.taskStoreService.getError();
  }

  onCreateTask(title) {
    this.taskStoreService.dispatchCreateAction(new Task(title));
  }

  onRemoveTask(task) {
    this.taskStoreService.dispatchRemoveAction(task);
  }

  onUpdateTask(event) {
    this.taskStoreService.dispatchUpdateAction(event.updates);
  }
}
