import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageThreeRoutingModule } from './page-three-routing.module';
import { PageThreeComponent } from './page-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [PageThreeComponent],
  imports: [
    CommonModule,
    PageThreeRoutingModule,
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
export class PageThreeModule { }
