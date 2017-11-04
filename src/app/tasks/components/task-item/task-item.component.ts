import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material/material';

import { Task } from './../../model/task';
import { TaskEditDialogComponent } from './../task-edit-dialog/task-edit-dialog.component';

@Component({
  selector: 'app-task-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);

  constructor(private dialog: MatDialog) {}

  onRemove() {
    this.remove.emit();
  }

  onEdit(title?: string) {
    this.edit.emit({
      id: this.task.id,
      completed: !!this.task.completed,
      title: title ? title : this.task.title,
    });
  }

  openEditDialog() {
    let dialogRef: MatDialogRef<TaskEditDialogComponent>;
    dialogRef = this.dialog.open(TaskEditDialogComponent);
    dialogRef.componentInstance.title = this.task.title;
    dialogRef.afterClosed().subscribe(res => this.onEdit(res));
  }
}
