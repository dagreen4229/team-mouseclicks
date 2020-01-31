import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { cprofile } from 'src/app/models/cprofile'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ClientProfileService } from 'src/app/Shared/services/client-profile.service';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  cprofiles: Observable<cprofile>;

//  public model: cprofile[];

  constructor(private clientProfileService: ClientProfileService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
      console.log(this.cprofiles)
      this.cprofiles = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.clientProfileService.getProfile(+params["Client_ID"]))
    );
   
      console.log(this.cprofiles)
/* 
       this.getProfiles()
    this.route.params.subscribe(param => {
      this.clientProfileService
      .getProfiles(+param["Client_ID"]) 
//      .subscribe(cd => (this.clientDetail = cd));
    });*/
  }
/* 
  getProfiles() : void {
    const id = +this.route.snapshot.paramMap.get('cprofile');
    console.log('Client_ID: ' + cprofile);
   
   
    this.http.get('/localhost:3000/client_profiles/' + id).subscribe(profile => {
      this.model = profile as cprofile;
      console.log('Client Profile', this.model);
  }
  ); 
  console.log('Client Profile', this.model);
}*/

}
