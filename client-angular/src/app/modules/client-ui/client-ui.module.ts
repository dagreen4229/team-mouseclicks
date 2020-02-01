import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloginComponent } from './clogin/clogin.component';
import { CdashboardComponent } from './cdashboard/cdashboard.component';
import { CregisterComponent } from './cregister/cregister.component';
import { CsetupAccountComponent } from './cregister/csetup-account/csetup-account.component';
import { CalendarComponent } from './cdashboard/calendar/calendar.component';

@NgModule({

  declarations: [CloginComponent, CdashboardComponent, CregisterComponent, CsetupAccountComponent, CalendarComponent],

  imports: [
    CommonModule
  ]
})
export class ClientUIModule { }
