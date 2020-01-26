import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Links for the mat-tab tags
  navLinks = [
    { path: 'view-calendar', label: 'Appointments'},
    { path: 'search-records', label: 'Records Search'}
    
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
