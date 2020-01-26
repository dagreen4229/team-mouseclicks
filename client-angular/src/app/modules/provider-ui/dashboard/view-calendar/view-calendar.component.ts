import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.css']
})
export class ViewCalendarComponent implements OnInit {
  navLinks = [
    { path: '/pdashboard/view-calendar', label: 'Appointments'},
    { path: '/pdashboard/search-records', label: 'Records Search'}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
