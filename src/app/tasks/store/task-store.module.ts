import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { taskReducer } from './task.reducer';
import { TaskActions } from './task.actions';
import { TaskEffects } from './task.effects';
import { TaskStoreService } from './task-store.service';

// import TaskStoreModule in the TaskModule
@NgModule({
  imports: [
    StoreModule.forFeature('task', taskReducer),
    EffectsModule.forFeature([TaskEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [TaskActions, TaskStoreService]
})
export class TaskStoreModule {}
