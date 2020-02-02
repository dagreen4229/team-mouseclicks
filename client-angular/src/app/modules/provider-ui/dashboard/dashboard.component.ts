import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService } from 'src/app/Shared/services';
import { Router } from '@angular/router';

import { Puser } from 'src/app/models/puser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: Puser;

  // Links for the mat-tab tags
  navLinks = [
    { path: 'view-calendar', label: 'Appointments'},
    { path: 'search-records', label: 'Records Search'}
    
  ];
 
  constructor(
    private router: Router,
        private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

  ngOnInit() {
  }

}
