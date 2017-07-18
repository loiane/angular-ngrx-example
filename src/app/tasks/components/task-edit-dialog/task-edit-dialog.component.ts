import { Task } from './../../model/task';
import { Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html'
})
export class TaskEditDialogComponent {

  public title: string;

  constructor(public dialogRef: MdDialogRef<TaskEditDialogComponent>) {}
}
