import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterProviderService } from 'src/app/Shared/services/register-provider.service'
import { AlertService } from '../../../Shared/services';

@Component({
  selector: 'app-cregister',
  templateUrl: './cregister.component.html',
  styleUrls: ['./cregister.component.css']
})
export class CregisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private RegisterProviderService:RegisterProviderService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      EmailAddress: ['', Validators.required],
      Username: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    } else {
        this.RegisterProviderService.RegisterCUser(this.registerForm.value)
        .pipe(first())
        .subscribe(
        puser => {
            this.alertService.success('Registration successful', true);
            this.router.navigate(['/cdashboard']);
        },
        );
    }
  }
}
