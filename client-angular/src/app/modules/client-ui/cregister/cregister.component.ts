import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterProviderService } from 'src/app/Shared/services/register-provider.service';
import { AlertService,
  CauthenticationService
} from '../../../Shared/services';
//import { MustMatch } from 'src/app/Shared/services/must-match.service';//

@Component({
  selector: 'app-cregister',
  templateUrl: 'cregister.component.html',
  styleUrls: ['./cregister.component.css']
})

export class CregisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  

  constructor(
    private RegisterProviderService: RegisterProviderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cauthenticationService: CauthenticationService,
    private alertService: AlertService
    ) { 

      if(this.cauthenticationService.currentUserValue) {
        this.router.navigate(['/cdashboard']);
      }
    }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      EmailAddress: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
     // confirmPassword: ['', Validators.required]//
     }, { 
       //validator: MustMatch('password', 'confirmPassword')//
      });

  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } 
    

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))//
    else {
        this.RegisterProviderService.RegisterCUser(this.registerForm.value)
        .pipe(first())
        .subscribe(
        _Cuser => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/clogin/csetup-account']);
        },
        );
    } 
  }
}
