import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/Shared/services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-calendar',
  templateUrl: './view-calendar.component.html',
  styleUrls: ['./view-calendar.component.css']
})
export class ViewCalendarComponent implements OnInit {
  navLinks = [
    { path: '/pdashboard/view-calendar', label: 'Appointment Calendar'},
    { path: '/pdashboard/search-records', label: 'Records Search'}
    
  ];
  // Input for appointment model
  appointment: Appointment[];

  getAppointments(): void {
    this.AppointmentService.getAppointments().subscribe(a => this.appointment = a)
  };

  constructor(private AppointmentService: AppointmentService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAppointments()
  }

}
