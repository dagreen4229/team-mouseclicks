import { Component, OnInit } from '@angular/core';
import { cprofile } from 'src/app/models/cprofile';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service'


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

  cprofiles: cprofile[];

  getProfiles() : void {
    this.ClientProfileService.getProfiles().subscribe(p => this.cprofiles = p)
  }
  
  constructor(private ClientProfileService : ClientProfileService) { }

  ngOnInit() {
    this.getProfiles()
  }

}
