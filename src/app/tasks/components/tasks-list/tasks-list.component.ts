import { Task } from './../../model/task';
import { Observable } from 'rxjs/Observable';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html'
})
export class TasksListComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('tasks') tasks$: Observable<Task[]>;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);

  onRemove(task) {
    this.remove.emit(task);
  }

  onUpdate(task, changes) {
    this.edit.emit({task: task, updates: changes});
  }
}
