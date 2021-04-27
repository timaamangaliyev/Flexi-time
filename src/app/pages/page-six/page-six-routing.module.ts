import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSixComponent } from './page-six.component';

const routes: Routes = [{path: '', component: PageSixComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageSixRoutingModule { }
