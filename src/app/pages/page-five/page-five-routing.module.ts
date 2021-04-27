import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFiveComponent } from './page-five.component';

const routes: Routes = [{path: '', component: PageFiveComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFiveRoutingModule { }
