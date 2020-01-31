import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { cprofile } from "src/app/models/cprofile"
import { Observable, of } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {
  url: string = "http://localhost:3000/client_profiles"

  getProfiles(): Observable<cprofile[]> {
    return this.http.get<cprofile[]>(this.url);
  }

  getProfile(id: number | string) {
    return this.getProfiles().pipe(
      map((cprofile: cprofile[]) => cprofile.find( profile => profile.Client_ID === +id))
    )
  }

  constructor(private http: HttpClient) { }
}
