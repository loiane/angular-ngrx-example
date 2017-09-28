import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Task } from './../../model/task';

@Component({
  selector: 'app-tasks-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
