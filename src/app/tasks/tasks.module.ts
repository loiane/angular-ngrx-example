import { CommonModule } from '@angular/common';
import { TaskStoreModule } from './store/task-store.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskService } from './services/task.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskEditDialogComponent } from './components/task-edit-dialog/task-edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    SharedModule,
    TaskStoreModule
  ],
  declarations: [
    TasksComponent,
    TaskItemComponent,
    TasksListComponent,
    TaskFormComponent,
    TaskEditDialogComponent
  ],
  providers: [TaskService],
  entryComponents: [TaskEditDialogComponent]
})
export class TasksModule {}
