import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MdToolbarModule } from '@angular/material';

const sharedModules = [CommonModule, HttpClientModule, MdToolbarModule];

@NgModule({
  imports: [CommonModule],
  exports: [...sharedModules]
})
export class SharedModule {}
