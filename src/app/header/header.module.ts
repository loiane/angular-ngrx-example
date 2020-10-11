import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import * as fromHeader from './store/header.reducer';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature(fromHeader.headerFeatureKey, fromHeader.reducer)
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
