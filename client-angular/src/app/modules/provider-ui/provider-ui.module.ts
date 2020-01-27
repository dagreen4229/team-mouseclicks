import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
=======
import { PLoginComponent } from './login/login.component';
group-dev-file
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({

  declarations: [LoginComponent, RegisterComponent, DashboardComponent],
=======
  declarations: [PLoginComponent, RegisterComponent, DashboardComponent],
group-dev-file
  imports: [
    CommonModule
  ]
})
export class ProviderUIModule { }
