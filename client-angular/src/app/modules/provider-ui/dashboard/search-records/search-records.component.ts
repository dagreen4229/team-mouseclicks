import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { cprofile } from 'src/app/models/cprofile';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service';
import { FilterUserService } from '../../../../Shared/services/filter-user.service';
import { FilterPipe } from '../../../../Shared/services/filter.pipe';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-search-records',
  templateUrl: './search-records.component.html',
  styleUrls: ['./search-records.component.css']
})
export class SearchRecordsComponent implements OnInit {
  navLinks = [
    { path: '/pdashboard/view-calendar', label: 'Appointment Calendar' },
    { path: '/pdashboard/search-records', label: 'Records Search' }
  ];

  //Inputs for search plug-in
  @Input() groupFilters: Object; 
  @Input() searchByKeyword: string;
  filteredProfiles: any[] = [];

  //Inputs for client profiles model
  cprofiles: cprofile[] = [];
/*
  getProfiles(): void {
    
    this.ClientProfileService.getProfiles().subscribe(p => this.cprofile = p)
  };
*/
/*
  toMedicalHistory() {
    this.navigate(['/history', this.cprofiles.Client_ID])
  }
*/
  constructor(private ClientProfileService: ClientProfileService, private route:ActivatedRoute, private router: Router  //  ,private ref: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  ngOnChanges(): void {
    if (this.groupFilters) this.filterCProfileList(this.groupFilters, this.cprofiles);
  }

    // the below doesn't seem to be working... 

    // loadProfiles() {
    //   this.ClientProfileService.getProfiles()
    //   .subscribe(cprofiles => (this.cprofiles = cprofiles));
    //   this.filteredProfiles = this.filteredProfiles.length > 0 ? this.filteredProfiles : this.cprofiles;
    // }

    loadProfiles() {
      this.ClientProfileService.getProfiles()
      .subscribe(cprofiles => (this.cprofiles = cprofiles));
      this.filteredProfiles = this.filteredProfiles.length > 0 ? this.filteredProfiles : this.cprofiles;
    }

  // The below function creates a new array based on the filtered results of cprofiles
  filterCProfileList(filters: any, cprofiles) {
    console.log('filterCProfile is running!')
    this.filteredProfiles = this.cprofiles;
    const keys = Object.keys(filters);
    const filterProfile = profile => {
      let result = keys.map(key => {
        if (!~key.indexOf('idClient_User')) {
          if (profile[key]) {
            return String(profile[key]).toLowerCase().startsWith(String(filters[key]))
          } else {
            return false;
          }
        }
      });
      result = result.filter(it => it !== undefined);
      if (filters['idClient_User'] && filters['idClient_User']) {
        if (+this.cprofiles['idClient_User'] >= +filters['idClient_User']) {
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