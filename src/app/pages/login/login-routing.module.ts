import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { 
  isLogin: boolean = false
errorMessage
  private _auth: any;
  private _router: any;
  private _api: any;
constructor( ) { }
ngOnInit() {
this.isUserLogin();
}
onSubmit(form: NgForm) {
console.log('Your form data : ', form.value);
  this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
if (res.status) {
  console.log(res)
  this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
  this._auth.setDataInLocalStorage('token', res.token);
  this._router.navigate(['']);
} else {
}
}, err => {
  this.errorMessage = err['error'].message;
});
}
  isUserLogin(){
    console.log(this._auth.getUserDetails())
  if(this._auth.getUserDetails() != null){
  this.isLogin = true;
}
}
  logout(){
  this._auth.clearStorage()
  this._router.navigate(['']);
}

}
