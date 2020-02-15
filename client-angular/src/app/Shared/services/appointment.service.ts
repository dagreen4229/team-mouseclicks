import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Appointment } from "src/app/models/appointment"
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  url: string = "http://localhost:8080/appointments"

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url);
  }


  constructor(private http: HttpClient) { }
}
