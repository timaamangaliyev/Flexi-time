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

    
  };

}
