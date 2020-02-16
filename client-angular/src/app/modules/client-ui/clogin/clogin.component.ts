import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertService, CauthenticationService } from 'src/app/Shared/services';


@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {

  //authentication//
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
 



  constructor(

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cauthenticationService: CauthenticationService,
    private alertService: AlertService
   ) {

    if (this.cauthenticationService.currentUserValue) {
      this.router.navigate(['/cdashboard']);
    }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.cauthenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['/cdashboard']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}
