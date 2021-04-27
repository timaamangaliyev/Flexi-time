import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourRoutingModule } from './page-four-routing.module';
import { PageFourComponent } from './page-four.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [PageFourComponent],
  imports: [
    CommonModule,
    PageFourRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
    
  ]
})
export class PageFourModule { }
