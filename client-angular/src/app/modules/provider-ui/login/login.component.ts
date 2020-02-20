import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertService, AuthenticationService } from 'src/app/Shared/services';
import { UserService } from 'src/app/Shared/services/user.service';
import { User } from 'src/app/models/user';

/* This file will show when a user clicks on the "Provider Login" link on the default route */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class PLoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    User: User;



  constructor(

    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService
  ) { 

    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/pdashboard']);
  }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
          this.userService.getByUsername(this.f.username.value).pipe(first()).subscribe( user => {
            this.User = user;
            this.redirect()
             // response => this.logResponse(response)
          });
             // this.router.navigate(["/cdashboard", { id: 1 }]);
            
             // this.router.navigate(["/pdashboard"]);
            },           
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}

redirect() {
  if(this.User.authorities[0].authority == "client") {
    this.router.navigate(["/cdashboard", { id: 1 }]);
  }
  if(this.User.authorities[0].authority == "provider") {
    this.router.navigate(["/pdashboard"]);
  }

  console.log(this.User.authorities[0].authority);
}
}
