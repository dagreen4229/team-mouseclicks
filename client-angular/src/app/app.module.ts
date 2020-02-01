import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PLoginComponent } from './modules/provider-ui/login/login.component';
import { CloginComponent } from './modules/client-ui/clogin/clogin.component';
import { AuthenticationComponent } from './Shared/services/authentication/authentication.component';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/provider-ui/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
//import { FilterPipe } from './Shared/services/filter.pipe';
//import { ProviderUIModule } from './modules/provider-ui/provider-ui.module';
import { PaccountComponent } from './modules/provider-ui/paccount/paccount.component';
import { ViewCalendarComponent } from './modules/provider-ui/dashboard/view-calendar/view-calendar.component';
import { SearchRecordsComponent } from './modules/provider-ui/dashboard/search-records/search-records.component';
import { DisplayClientComponent } from './modules/provider-ui/dashboard/display-client/display-client.component';
import { SearchClientsComponent } from './modules/provider-ui/dashboard/search-clients/search-clients.component';
import { RegisterComponent } from './modules/provider-ui/register/register.component';
import { SetupAccountComponent } from './modules/provider-ui/register/setup-account/setup-account.component';
import { ClientDetailComponent } from './modules/provider-ui/dashboard/client-detail/client-detail.component';



@NgModule({

  declarations: [
    AppComponent,  
    AuthenticationComponent, 
    HomeComponent, 
    CloginComponent,   
//    FilterPipe,
    PLoginComponent,
    DashboardComponent,
    PaccountComponent,
    ViewCalendarComponent,
    SearchRecordsComponent,
    SearchClientsComponent,
    DisplayClientComponent,
    RegisterComponent,
    SetupAccountComponent,
    ClientDetailComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    MatSliderModule, 
    MatTabsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}