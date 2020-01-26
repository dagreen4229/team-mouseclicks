import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { PLoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PaccountComponent } from './paccount/paccount.component';

import { SearchRecordsComponent } from './dashboard/search-records/search-records.component';
import { DisplayClientComponent } from './dashboard/display-client/display-client.component';




@NgModule({
  declarations: [RegisterComponent, DashboardComponent, SearchRecordsComponent, PLoginComponent, DisplayClientComponent, PaccountComponent],
  
  imports: [
    CommonModule
  ],
  exports: [
    SearchRecordsComponent
  ]
})
export class ProviderUIModule { }
