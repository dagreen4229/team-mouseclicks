import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { cprofile } from "src/app/models/cprofile"
import { Observable, of, Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {
 // Express URL Below
 url: string = "http://localhost:3000/ClientProfiles"

 //Java URL Below
//  url: string = "http://localhost:8080/client/profiles"

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();
  
  constructor(private http: HttpClient) { }

  //cprofile: cprofile[]

  getProfiles(): Observable<cprofile[]> {
    return this.http.get<cprofile[]>(this.url);
  }

    // getProfiles() {
    //   return this.http.get(this.url)
    // }

    // getProfiles() {
    //   return this.http.get<cprofile[]>(
    //     this.url, { observe: 'response' });
    // }
/*
  getProfile(id: number | string) {
    return this.getProfiles().pipe(
      map((cprofile: cprofile[]) => cprofile.find( profile => profile.idClient_User === +id))
    )
  }
*/
 
}
