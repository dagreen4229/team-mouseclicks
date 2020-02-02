import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/service/hardcoded-authentication.service';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {

  //authentication//
  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  //Router
  //Angular.giveMeRouter
  //Dependency Injection, add private router: Router, private hardcodedAuthenticationService: ...
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username);
    //if(this.username==="" && this.password === "") {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
      
  }



}