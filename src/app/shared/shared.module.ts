import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatProgressSpinnerModule,
    MatFormFieldModule
  ]
})
export class SharedModule {}
