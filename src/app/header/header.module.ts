import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class HeaderModule { }
