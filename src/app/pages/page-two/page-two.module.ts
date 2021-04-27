import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [PageTwoComponent],
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ]
})
export class PageTwoModule { }
