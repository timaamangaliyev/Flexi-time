import { Absens } from './absens';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent {
   
   absens = new Absens();
   constructor(private http:HttpClient,private spinner: NgxSpinnerService) { }

   onSubmit() {
     
     console.log('this is checkin time',this.absens);
     
     const api_url= "http://localhost:3000/api/happlylife";
     this.spinner.show();
     
     this.http.post(api_url,JSON.stringify(this.absens))
       .subscribe(
         (response)=>{
           window.alert('approved!');
           this.spinner.hide();
         },
         (error)=>{
          console.error(' error !', error.error);
          this.spinner.hide();
          window.alert(error.error);
         }
     );
 
    // alert('Thanks for submitting! Data: ' + JSON.stringify(this.checkin));
   }

}
