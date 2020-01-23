import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PLoginComponent } from './modules/provider-ui/login/login.component';
//import { HomeComponent } from './modules/home/home.component';
import { CloginComponent } from './modules/client-ui/clogin/clogin.component';


const routes: Routes = [

  /*{
    path: '',
    component: HomeComponent
  },*/
  {
    path: 'plogin',
    component: PLoginComponent
  },
  {
    path: 'clogin',
    component: CloginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
