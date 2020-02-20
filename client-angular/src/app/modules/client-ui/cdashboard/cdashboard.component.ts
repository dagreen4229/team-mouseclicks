import { Component, OnInit } from '@angular/core';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service';
import { ActivatedRoute } from '@angular/router';




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
   
   id = ''

  constructor(private route:ActivatedRoute,private service:ClientProfileService) { }

  ngOnInit() {
 this.id = this.route.snapshot.params['id'];
 this.getId();

  }
  
  getId() {
    this.service.getUserId(this.id).subscribe(
      response => this.handleSuccessfulResponse(response.idClient_User)
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response)
  }

  
}
