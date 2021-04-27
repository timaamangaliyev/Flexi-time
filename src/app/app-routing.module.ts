import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavModule } from './components/sidenav/sidenav.module';

const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('./pages/login/login.module').then(
      m => m.LoginModule
    )
},
  {path: 'sidenav',component:SidenavComponent},
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: 'page-one',
        loadChildren: () =>
          import('./pages/page-one/page-one.module').then(
            m=>m.PageOneModule
          )
       },
       {
         path: 'page-two',
         loadChildren: () => 
           import('./pages/page-two/page-two.module').then(
             m=>m.PageTwoModule
           )
       },
       {
         path: 'page-three',
         loadChildren: () =>
           import('./pages/page-three/page-three.module').then(
             m=>m.PageThreeModule
           )
       },
       {
        path: 'page-four',
        loadChildren: () =>
          import('./pages/page-four/page-four.module').then(
            m=>m.PageFourModule
          )
      },
      {
        path: 'page-five',
        loadChildren: () =>
          import('./pages/page-five/page-five.module').then(
            m=>m.PageFiveModule
          )
      },
      {
        path: 'page-six',
        loadChildren: () =>
          import('./pages/page-six/page-six.module').then(
            m=>m.PageSixModule
          )
      }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
