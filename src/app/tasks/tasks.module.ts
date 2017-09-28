import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { TaskEditDialogComponent } from './components/task-edit-dialog/task-edit-dialog.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { TaskService } from './services/task.service';
import { TaskStoreModule } from './store/task-store.module';
import { TasksRoutingModule } from './tasks-routing.module';

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
