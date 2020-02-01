import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { pprofile } from "src/app/models/pprofile"
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProviderProfileService {
  url: string = "http://localhost:3000/provider_profiles"

  getProviderProfiles(): Observable<pprofile[]> {
    return this.http.get<pprofile[]>(this.url);
  }

  constructor(private http: HttpClient) { }
}
