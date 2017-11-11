import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {}
