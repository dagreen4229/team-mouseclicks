import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterProviderService } from 'src/app/Shared/services/register-provider.service'
import { AlertService, 
//    UserService, 
    AuthenticationService
 } from '../../../Shared/services';

@Component({
    selector: 'app-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})
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
        this.registerForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl(), 
            Email_Address: new FormControl(),
            userType: new FormControl()
        })
        this.registerForm = this.formBuilder.group({
            
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            Email_Address: ['', Validators.required],
            userType: ['', Validators.required]
            //userType = true determines user is a provider
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
// under construction

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log("Whoops something went wrong")
            return;
        } else {
            console.log("registration initiated")
            if (this.registerForm.value.userType==="1") {
                this.registerProviderService.RegisterUser(this.registerForm.value)
                .pipe(first())
                .subscribe(
                user => {
                    this.alertService.success('Registration successful', true);
                    console.log(this.registerForm.value.Provider)
                    this.router.navigate(['/plogin/setup-account']);
                },
                );
            
            } else {
                this.registerProviderService.RegisterUser(this.registerForm.value)
                .pipe(first())
                .subscribe(
                user => {
                    this.alertService.success('Registration successful', true);
                    console.log(this.registerForm.value.Provider)
                    this.router.navigate(['/plogin/csetup-account']);
                },
                );
            }


            // console.log(this.registerForm.value)
            // console.log(this.registerForm.value.userType)
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

