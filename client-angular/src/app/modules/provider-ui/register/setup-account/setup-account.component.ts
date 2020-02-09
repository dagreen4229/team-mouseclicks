import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterProviderService } from 'src/app/Shared/services/register-provider.service'
import { AlertService, 
//    UserService, 
    AuthenticationService
 } from '../../../../Shared/services';

@Component({
  selector: 'app-setup-account',
  templateUrl: './setup-account.component.html',
  styleUrls: ['./setup-account.component.css']
})
export class SetupAccountComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private registerProviderService: RegisterProviderService,
        private alertService: AlertService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      User_ID: ['', Validators.required],
      First_name: ['', Validators.required],
      Last_name: ['', Validators.required],
      Office_Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Phone_number: ['', Validators.required],
      Bio: ['', Validators.required]
  });
  }

      // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }

      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else {
            this.registerProviderService.RegisterPProfile(this.registerForm.value)
            .pipe(first())
            .subscribe(
            puser => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/pdashboard']);
            },
            );
        }
      }
}
