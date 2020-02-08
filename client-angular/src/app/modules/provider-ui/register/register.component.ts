import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterProviderService } from 'src/app/Shared/services/register-provider.service'
import { AlertService, 
//    UserService, 
    AuthenticationService
 } from '../../../Shared/services';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private registerProviderService: RegisterProviderService,
 //       private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/pdashboard']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Email_Address: ['', Validators.required],
            Username: ['', Validators.required],
            Password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
// under construction

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else {
            this.registerProviderService.RegisterPUser(this.registerForm.value)
            .pipe(first())
            .subscribe(
            puser => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            );
        }


/*
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
                */
    } 
}

