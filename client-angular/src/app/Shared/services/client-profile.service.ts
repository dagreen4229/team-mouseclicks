import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { cprofile } from "src/app/models/cprofile"
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {
  url: string = "http://localhost:3000/client_profiles"

  getProfiles(): Observable<cprofile[]> {
    return this.http.get<cprofile[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
