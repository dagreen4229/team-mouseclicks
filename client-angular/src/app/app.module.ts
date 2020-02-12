import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

// used to create fake backend
import { fakeBackendProvider } from './fakeBackend';
import { JwtInterceptor, ErrorInterceptor } from './fakeBackend';

// Services
import { FilterPipe } from './Shared/services/';
import { MustMatch } from './Shared/services/';

// Client side components
import { CloginComponent } from './modules/client-ui/clogin/clogin.component';
import { CdashboardComponent } from './modules/client-ui/cdashboard/cdashboard.component';
import { CalendarComponent } from './modules/client-ui/cdashboard/calendar/calendar.component';
import { CregisterComponent } from './modules/client-ui/cregister/cregister.component';
import { CsetupAccountComponent } from './modules/client-ui/cregister/csetup-account/csetup-account.component';

// Provider side components
import { AppComponent } from "./app.component";
import { PLoginComponent } from './modules/provider-ui/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/provider-ui/dashboard/dashboard.component';
import { PaccountComponent } from './modules/provider-ui/paccount/paccount.component';
import { ViewCalendarComponent } from './modules/provider-ui/dashboard/view-calendar/view-calendar.component';
import { SearchRecordsComponent } from './modules/provider-ui/dashboard/search-records/search-records.component';
import { DisplayClientComponent } from './modules/provider-ui/dashboard/display-client/display-client.component';
import { SearchClientsComponent } from './modules/provider-ui/dashboard/search-records/search-clients/search-clients.component';
import { RegisterComponent } from './modules/provider-ui/register/register.component';
import { SetupAccountComponent } from './modules/provider-ui/register/setup-account/setup-account.component';

import { ClientHistoryComponent } from './modules/provider-ui/dashboard/client-history/client-history.component';




@NgModule({

  declarations: [
    AppComponent,   
    HomeComponent, 
    CloginComponent,   
    FilterPipe,
    PLoginComponent,
    DashboardComponent,
    CdashboardComponent,
    PaccountComponent,
    ViewCalendarComponent,
    CalendarComponent,
    SearchRecordsComponent,
    SearchClientsComponent,
    DisplayClientComponent,
    RegisterComponent,
    CregisterComponent,
    SetupAccountComponent,
    CsetupAccountComponent,

    CregisterComponent,
    ClientHistoryComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    MatSliderModule, 
    MatTabsModule,
    ReactiveFormsModule
  ],

  providers: [
    
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}