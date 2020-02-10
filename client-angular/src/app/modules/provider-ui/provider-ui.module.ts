import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterComponent } from './register/register.component';
import { PLoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PaccountComponent } from './paccount/paccount.component';

import { SearchRecordsComponent } from './dashboard/search-records/search-records.component';
import { DisplayClientComponent } from './dashboard/display-client/display-client.component';
//import { ClientDetailComponent } from './dashboard/client-detail/client-detail.component';
import { SearchClientsComponent } from './dashboard/search-records/search-clients/search-clients.component';
//import { ViewCalendarComponent } from './dashboard/view-calendar/view-calendar.component';




@NgModule({
  declarations: [
    DashboardComponent, 
//    ClientDetailComponent, 
    DisplayClientComponent,
    SearchClientsComponent,
    SearchRecordsComponent,

//    ViewCalendarComponent,
    PLoginComponent, 
    PaccountComponent,
    RegisterComponent, 
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchRecordsComponent,
//    SearchClientsComponent
  ]
})
export class ProviderUIModule { }
