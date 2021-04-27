import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { Shcedule } from './schedule';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.css']
})
export class PageFourComponent implements OnInit {

  constructor(private http:HttpClient,private spinner: NgxSpinnerService) { }
  shcedule=new Shcedule();

  displayedColumns = ['day', 'from', 'till','planedWork','planedWorkHours'];
  dataSource = new MatTableDataSource();

  onSubmit() {
    console.log('this is checkin time',this.dataSource.data);
     
    const api_url= "http://localhost:3000/api/happlylife";
    this.spinner.show();
    
    this.http.post(api_url,JSON.stringify(this.dataSource.data))
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
  }

  ngOnInit(): void {

    this.dataSource.data =
    [
    {day: "Monday", from: "09:00",  till: "18:00", planedWork:"office", planedWorkHours:8},
    {day: "Tuesday", from: "09:00",  till: "18:00", planedWork:"office", planedWorkHours:8},
    {day: "Wensday", from: "09:00",  till: "18:00", planedWork:"vendor metting at 10:30", planedWorkHours:8},
    {day: "Thusday", from: null,  till: null, planedWork:null, planedWorkHours:null},
    {day: "Friday", from: null,  till: null, planedWork:null, planedWorkHours:null},
    {day: "Saturday", from: null,  till: null, planedWork:null, planedWorkHours:null},
    {day: "Sunday", from: null,  till: null, planedWork:null, planedWorkHours:null},
     ]
  };

}
