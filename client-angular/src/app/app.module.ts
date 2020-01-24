import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PLoginComponent } from './modules/provider-ui/login/login.component';
import { CloginComponent } from './modules/client-ui/clogin/clogin.component';
import { AuthenticationComponent } from './Shared/services/authentication/authentication.component';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/provider-ui/dashboard/dashboard.component';
import { PaccountComponent } from './modules/provider-ui/paccount/paccount.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewCalendarComponent } from './modules/provider-ui/dashboard/view-calendar/view-calendar.component';
import { SearchRecordsComponent } from './modules/provider-ui/dashboard/search-records/search-records.component';

@NgModule({
  declarations: [AppComponent, PLoginComponent, AuthenticationComponent, HomeComponent, CloginComponent, DashboardComponent, PaccountComponent, ViewCalendarComponent, SearchRecordsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatSliderModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
