import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TaskStoreService } from './task-store.service';
import { TaskEffects } from './task.effects';
import { taskReducer } from './task.reducer';

// import TaskStoreModule in the TaskModule
@NgModule({
  imports: [
    StoreModule.forFeature('task', taskReducer),
    EffectsModule.forFeature([TaskEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [TaskStoreService]
})
export class TaskStoreModule {}
