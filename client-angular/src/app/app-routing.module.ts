import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PLoginComponent } from './modules/provider-ui/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CloginComponent } from './modules/client-ui/clogin/clogin.component';
import { DashboardComponent } from './modules/provider-ui/dashboard/dashboard.component';
import { CdashboardComponent } from './modules/client-ui/cdashboard/cdashboard.component';
import { PaccountComponent } from './modules/provider-ui/paccount/paccount.component'
import { ViewCalendarComponent } from './modules/provider-ui/dashboard/view-calendar/view-calendar.component';
import { CalendarComponent } from './modules/client-ui/cdashboard/calendar/calendar.component';
import { SearchRecordsComponent } from './modules/provider-ui/dashboard/search-records/search-records.component'; 
import { RegisterComponent } from './modules/provider-ui/register/register.component';
import { CregisterComponent } from './modules/client-ui/cregister/cregister.component';
import { SetupAccountComponent } from './modules/provider-ui/register/setup-account/setup-account.component';
import { CsetupAccountComponent } from './modules/client-ui/cregister/csetup-account/csetup-account.component';

import { ClientHistoryComponent } from './modules/provider-ui/dashboard/client-history/client-history.component';


const routes: Routes = [

{
    path: '',
    component: HomeComponent
  },
  {
    path: 'plogin',
    component: PLoginComponent
  },
  {
    path: 'clogin',
    component: CloginComponent
  },
  {
    path: 'pdashboard',
    component: DashboardComponent
  },
  {
    path: 'cdashboard',
    component: CdashboardComponent
  },
  {
    path: 'pdashboard/account',
    component: PaccountComponent
  },
  {
    path: 'pdashboard/view-calendar',
    component: ViewCalendarComponent
  },
  {
    path: 'cdashboard/calendar',
    component: CalendarComponent
  },
  {
    path: 'pdashboard/search-records',
    component: SearchRecordsComponent
  },
  {
    path: 'plogin/register',
    component: RegisterComponent
  },
  {
    path: 'clogin/register',
    component: CregisterComponent
  },
  {
    path: 'plogin/setup-account',
    component: SetupAccountComponent
  },
  {
    path: 'plogin/csetup-account',
    component: CsetupAccountComponent
  },
  {
    path: 'pdashboard/search-records/history/:Client_ID',
    component: ClientHistoryComponent
  },



  // Otherwise redirect to home
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }