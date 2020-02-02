import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdashboard',
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.css']
})
export class CdashboardComponent implements OnInit {

  // Links for the mat-tab tags
  navLinks = [
    { path: 'cdashboard/calendar', label: 'Appointments'}
    
  ];


  constructor() { }

  ngOnInit() {
  }

}
