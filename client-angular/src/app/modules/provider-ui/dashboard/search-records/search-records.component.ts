import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.component.html',
  styleUrls: ['./search-records.component.css']
})
export class SearchRecordsComponent implements OnInit {
  navLinks = [
    { path: '/pdashboard/view-calendar', label: 'Appointments'},
    { path: '/pdashboard/search-records', label: 'Records Search'}
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
