import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PLoginComponent } from './modules/provider-ui/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { CloginComponent } from './modules/client-ui/clogin/clogin.component';
import { DashboardComponent } from './modules/provider-ui/dashboard/dashboard.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
