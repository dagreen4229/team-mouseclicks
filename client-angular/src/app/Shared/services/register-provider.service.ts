import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Puser } from "src/app/models/puser";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterProviderService {
  url: string = "http://localhost:3000/registerPUser"
  constructor(private http: HttpClient) { }

  RegisterPUser(value) {
    console.log(value)
    return this.http.post<Puser[]>(this.url, value);
  }
}
