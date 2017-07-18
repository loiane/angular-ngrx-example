import { MdDialogRef } from '@angular/material/material';
import { TaskEditDialogComponent } from './../task-edit-dialog/task-edit-dialog.component';
import { Task } from './../../model/task';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() edit: EventEmitter<any> = new EventEmitter(false);

  constructor(private dialog: MdDialog) {}

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
    let dialogRef: MdDialogRef<TaskEditDialogComponent>;
    dialogRef = this.dialog.open(TaskEditDialogComponent);
    dialogRef.componentInstance.title = this.task.title;
    dialogRef.afterClosed().subscribe(res => this.onEdit(res));
  }
}
