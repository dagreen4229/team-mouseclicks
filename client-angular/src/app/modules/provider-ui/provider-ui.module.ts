import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [PLoginComponent, RegisterComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class ProviderUIModule { }
