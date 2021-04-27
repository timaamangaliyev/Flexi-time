import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatTableModule
  ]
})
export class PageOneModule { }
