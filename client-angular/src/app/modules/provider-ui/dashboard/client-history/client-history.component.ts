import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-history',
  templateUrl: './client-history.component.html',
  styleUrls: ['./client-history.component.css']
})


export class ClientHistoryComponent implements OnInit {
  navLinks = [
    { path: '/pdashboard/view-calendar', label: 'Appointments' },
    { path: '/pdashboard/search-records', label: 'Records Search' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
