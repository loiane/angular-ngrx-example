import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular/material';

const sharedModules = [CommonModule, MdToolbarModule];

@NgModule({
  imports: [CommonModule],
  exports: [...sharedModules]
})
export class SharedModule {}
