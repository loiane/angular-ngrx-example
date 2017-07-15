import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksService } from './services/tasks.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  declarations: [TasksComponent, TaskItemComponent, TasksListComponent, TaskFormComponent],
  providers: [TasksService]
})
export class TasksModule { }
