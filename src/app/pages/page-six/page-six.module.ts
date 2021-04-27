import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSixRoutingModule } from './page-six-routing.module';
import { PageSixComponent } from './page-six.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [PageSixComponent],
  imports: [
    CommonModule,
    PageSixRoutingModule,
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
export class PageSixModule { }
