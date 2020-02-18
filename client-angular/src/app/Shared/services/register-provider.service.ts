import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Puser } from "src/app/models/puser";
import { Cuser } from "src/app/models/cuser";
import { User } from "src/app/models/user";
import { cprofile } from "src/app/models/cprofile"
import { pprofile } from "src/app/models/pprofile"
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterProviderService {
  // url: string = "http://localhost:3000/registerUser"
  // url2: string = "http://localhost:8080/registerCUser"
   url3: string = "http://localhost:3000/registerCProfile"
   url4: string = "http://localhost:3000/registerPProfile"

  url: string = "http://localhost:8080/register/user"
  // url2: string = "http://localhost:8080/register/CUser"
  // url3: string = "http://localhost:8080/register/CProfile"
  // url4: string = "http://localhost:8080/register/PProfile"

  constructor(private http: HttpClient) { }

  // RegisterPUser(value) {
  //   console.log(value)
  //   return this.http.post<Puser[]>(this.url, value);
  // }

  // RegisterCUser(value) {
  //   console.log (value)
  //   return this.http.post<Cuser[]>(this.url2, value);
  // }

  RegisterUser(value) {
    console.log (value)
    return this.http.post<User[]>(this.url, value);
  }

  RegisterCProfile(value) {
    console.log (value)
    return this.http.post<cprofile[]>(this.url3, value);
  }

  RegisterPProfile(value) {
    console.log (value)
    return this.http.post<pprofile[]>(this.url4, value);
  }
}
