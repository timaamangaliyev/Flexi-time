import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,MatSidenavModule,RouterModule, MatListModule
  ]
})
export class SidenavModule { }
