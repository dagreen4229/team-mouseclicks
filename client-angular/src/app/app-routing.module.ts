import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PLoginComponent } from './modules/provider-ui/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CloginComponent } from './modules/client-ui/clogin/clogin.component';
import { DashboardComponent } from './modules/provider-ui/dashboard/dashboard.component';
import { PaccountComponent } from './modules/provider-ui/paccount/paccount.component'
import { ViewCalendarComponent } from './modules/provider-ui/dashboard/view-calendar/view-calendar.component';
import { SearchRecordsComponent } from './modules/provider-ui/dashboard/search-records/search-records.component';
import { RegisterComponent } from './modules/provider-ui/register/register.component';
import { SetupAccountComponent } from './modules/provider-ui/register/setup-account/setup-account.component';
import { ClientDetailComponent } from './modules/provider-ui/dashboard/client-detail/client-detail.component';


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
    path: 'pdashboard/account',
    component: PaccountComponent
  },
  {
    path: 'pdashboard/view-calendar',
    component: ViewCalendarComponent
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
    path: 'plogin/setup-account',
    component: SetupAccountComponent
  },
  {
    path: 'history/:Client_ID',
    component: ClientDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
