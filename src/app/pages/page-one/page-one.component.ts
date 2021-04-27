import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { Shcedule } from './schedule';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent  {
  time_remaining: number;
  worked_hours: number;
  shcedule=new Shcedule();

  displayedColumns = ['day', 'from', 'till'];
  dataSource = new MatTableDataSource();

  constructor(private http:HttpClient,private spinner: NgxSpinnerService) { }
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 20;
  
  ngOnInit(): void {
    let  api_url= "http://localhost:3000/api/happlylife";
    
    this.spinner.show();
    this.http.get<any>(api_url)
    .subscribe(
      (response)=>{
        console.log(response[0]); 
      //this.dataSourceReverse.data=response;
      this.spinner.hide(); //setTimeout(function () { this.spinner.hide()  }, 500); 
      this.time_remaining=152;
      this.worked_hours=32;
    },
    (error)=>{
     console.error('This is error', error.error);
     this.spinner.hide();
     window.alert(error.error);
     this.spinner.hide();
    }
    );

    this.dataSource.data =
    [
    {day: "24.04.2021", from: "09:00",  till: "19:00"},
    {day: "25.04.2021", from: "09:10",  till: "18:00"},
    {day: "26.04.2021", from: "09:00",  till: "18:00"},
    {day: "27.04.2021", from: null,  till: null},
    ]
  }



}
