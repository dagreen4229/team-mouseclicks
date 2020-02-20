
import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { cprofile } from 'src/app/models/cprofile';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service';
import { FilterUserService } from '../../../../../Shared/services/filter-user.service';
import { FilterPipe } from '../../../../../Shared/services/filter.pipe';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

//Inputs for search plug-in
@Input() groupFilters: Object; 
@Input() searchByKeyword: string;
filteredProfiles: any[] = [];

//Inputs for client profiles model
cprofiles: cprofile[] = [];

  constructor(
    private ClientProfileService: ClientProfileService, 
    private route:ActivatedRoute, 
    private router: Router, 
    // private SearchClientsComponent: SearchClientsComponent  
    private ref: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.loadProfiles()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.groupFilters) {
    console.log("I hear you!")
    this.filterCProfileList(this.groupFilters, this.cprofiles);
    }
  }
 
  // The below function creates a new array based on the filtered results of cprofiles
  filterCProfileList(filters: any, cprofiles: any) {
    console.log('filterCProfile is running!', filters)
    this.filteredProfiles = this.cprofiles;
    const keys = Object.keys(filters);
    const filterProfile = profile => {
      let result = keys.map(key => {
//        if (!~key.indexOf('City')) {
          console.log('no index found')
          if (profile[key]) {
            console.log('string recognized')
            return String(profile[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase());            
          } else {
//            console.log('profile', profile);
          
          if (filters['Last_Name']) {
            console.log('name filter recognized')
            if (+cprofiles['Last_Name'] == +filters['Last_Name']) {
              result.push(true);
            } else {
              result.push(false)
              console.log("Name didn't match")
            }
          }
            
            return false;           
          }
        // } else {
        //   console.log ('index recognized')
        // }
      });
      result = result.filter(it => it !== undefined);
  

      // if (filters['idClient_User'] && filters['idClient_User']) {
      //   if (+this.cprofiles['idClient_User'] >= +filters['idClient_User']) {
      //     result.push(true);
      //   } else {
      //     result.push(false);
      //   }
      // } else {
      //   result.push(false);
      // }
      console.log('result:', result)
      return result.reduce((acc, cur: any) => { return acc & cur }, 1)
      
    }
    this.filteredProfiles = this.cprofiles.filter(filterProfile);
    console.log('filterCProfileList Complete!')
  }

// The loadProfiles() is called on init to populate the initial table
  loadProfiles(): void {
    this.ClientProfileService.getProfiles()
    .subscribe(cprofiles => (this.cprofiles = cprofiles, this.filteredProfiles = cprofiles));
    this.filteredProfiles = this.filteredProfiles.length > 0 ? this.filteredProfiles : this.cprofiles;
  }


}


