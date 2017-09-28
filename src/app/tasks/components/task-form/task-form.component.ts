import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  @Output() createTask: EventEmitter<any> = new EventEmitter(false);

  @Input() title: string;

  clear(): void {
    this.title = '';
  }

  onSubmit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createTask.emit(title);
    }
    this.clear();
  }

  constructor() {
    this.title = '';
  }
}
