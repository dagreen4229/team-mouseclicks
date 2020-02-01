import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { cprofile } from 'src/app/models/cprofile';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.component.html',
  styleUrls: ['./search-records.component.css']
})
export class SearchRecordsComponent implements OnInit {
  navLinks = [
    { path: '/pdashboard/view-calendar', label: 'Appointments' },
    { path: '/pdashboard/search-records', label: 'Records Search' }
  ];

  //Inputs for search plug-in
  @Input() groupFilters: Object; 
  @Input() searchByKeyword: string;
  filteredProfiles: any[] = [];

  //Inputs for client profiles
  cprofiles: cprofile[];

  getProfiles(): void {
    this.ClientProfileService.getProfiles().subscribe(p => this.cprofiles = p)
  };
/*
  toMedicalHistory() {
    this.navigate(['/history', this.cprofiles.Client_ID])
  }
*/
  constructor(private ClientProfileService: ClientProfileService, private route:ActivatedRoute, private router: Router  //  ,private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.getProfiles();
  //  if (this.groupFilters) this.filterCProfileList(this.groupFilters, this.cprofiles);
  }

  filterCProfileList(filters: any, cprofiles: any): void {
    this.filteredProfiles = this.cprofiles;
    const keys = Object.keys(filters);
    const filterProfile = profile => {
      let result = keys.map(key => {
        if (!~key.indexOf('Last_name')) {
          if (profile[key]) {
            return String(profile[key]).toLowerCase().startsWith(String(filters[key]))
          } else {
            return false;
          }
        }
      });
      result = result.filter(it => it !== undefined);
      if (filters['ageto'] && filters['Last-name']) {
        if (+cprofile['Last_name'] >= +filters['Last_name']) {
          result.push(true);
        } else {
          result.push(false);
        }
      } else {
        result.push(false);
      }
      return result.reduce((acc, cur: any) => { return acc & cur }, 1)
    }
    this.filteredProfiles = this.cprofiles.filter(filterProfile);
  }
}