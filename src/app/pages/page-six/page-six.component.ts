import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Checkin } from './checkin';
import { Shcedule } from './schedule';

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.css']
})
export class PageSixComponent {
  checkin = new Checkin();
  shcedule=new Shcedule();
  displayedColumns = ['day', 'from', 'till'];
  dataSource = new MatTableDataSource();
  constructor() { }

  onSubmit() { 
    //alert('Thanks for submitting! Data: ');
    
    this.dataSource.data =
    [
    {day: "24.04.2021", from: "09:00",  till: "19:30"},
    {day: "25.04.2021", from: "10:30",  till: "20:17"},
    {day: "26.04.2021", from: "09:00",  till: "18:00"},
    {day: "27.04.2021", from: null,  till: null},
    ]
  }

}
