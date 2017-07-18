import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdButtonModule,
  MdIconModule,
  MdCheckboxModule,
  MdDialogModule,
  MdProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdDialogModule,
    MdProgressSpinnerModule
  ]
})
export class SharedModule {}
