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
    
  
  }

}
