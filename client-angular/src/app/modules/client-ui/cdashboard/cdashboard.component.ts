import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { cprofile } from 'src/app/models/cprofile';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FilterUserService } from '../../../../app/Shared/services/filter-user.service';
import { FilterPipe } from '../../../../app/Shared/services/filter.pipe';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

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
 /* @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  // inputs for client profiles model
  cprofiles: cprofile[] = [];
  filteredProfiles: any; */
  http: any;
  service: any;
  response: any;
  cprofile: any;
  id: any;

  constructor(
    private ClientProfileService: ClientProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cprofile = this.route.paramMap.pipe(
    switchMap((params: ParamMap) => 
    this.service.getUserId(params.get('id')))
    );
   console.log(this.cprofile);
  }

 /* ngOnChanges(changes: SimpleChanges): void {
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
       
      });
      result = result.filter(it => it !== undefined);
  
      return result.reduce((acc, cur: any) => { return acc & cur }, 1)
      
    }
    this.filteredProfiles = this.cprofiles.filter(filterProfile);
    console.log('filterCProfileList Complete!')
  }


  loadProfiles(): void {
    this.ClientProfileService.getProfiles()
    .subscribe(cprofiles => (this.cprofiles = cprofiles, this.filteredProfiles = cprofiles));
    this.filteredProfiles = this.filteredProfiles.length > 0 ? this.filteredProfiles : this.cprofiles;
  } */

    getUserId() {
    //return this.http.get(`http://localhost8080:/pdashboard/${id}`);
    
    this.cprofile.getUserId(this.id).subscribe(
      // response => this.response = response
      response => (this.cprofile = response)
       
     //error => this.(error)
    );
      console.log(this.response);
    }
  }