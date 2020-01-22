import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PLoginComponent } from './modules/provider-ui/login/login.component';
import { AuthenticationComponent } from './Shared/services/authentication/authentication.component';

@NgModule({
  declarations: [AppComponent, PLoginComponent, AuthenticationComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
