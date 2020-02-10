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
  ProfileForm: FormGroup;
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
    this.ProfileForm = this.formBuilder.group({
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
      get f() { return this.ProfileForm.controls; }

      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.ProfileForm.invalid) {
            return;
        } else {
            this.registerProviderService.RegisterPProfile(this.ProfileForm.value)
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
