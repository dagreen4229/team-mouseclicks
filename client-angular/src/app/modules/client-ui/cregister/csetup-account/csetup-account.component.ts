import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterProviderService } from 'src/app/Shared/services/register-provider.service'
import { AlertService, 
//    UserService, 
    AuthenticationService
 } from '../../../../Shared/services';
import { cprofile } from 'src/app/models/cprofile';

@Component({
  selector: 'app-csetup-account',
  templateUrl: './csetup-account.component.html',
  styleUrls: ['./csetup-account.component.css']
})
export class CsetupAccountComponent implements OnInit {
  registerForm: FormGroup;
    loading = false;
    submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private registerProviderService: RegisterProviderService,
    private alertService: AlertService
  ) { 
    
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      First_Name: ['', Validators.required],
      Last_Name: ['', Validators.required],
      DOB: ['', Validators.required],
      Gender: ['', Validators.required],
      Phone_number: ['', Validators.required],
      Street_Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required]

  });
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   // Form currently recieving a 400 error when submitted.  Not sure if it is server side or client side.
   onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.registerForm.invalid) {
         return;
     } else {
         this.registerProviderService.RegisterCProfile(this.registerForm.value)
         .pipe(first())
         .subscribe(
         cprofile => {
             this.alertService.success('Registration successful', true);
             this.router.navigate(['/clogin/setup-account']);
         },
         );
     }
   }

}
