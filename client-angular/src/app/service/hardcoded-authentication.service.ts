import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username === "" && password === '') {
      sessionStorage.setItem('authenicateUser', username);
      //console.log('after' + this.isUserLoggedIn());
      return true;
    }
    return false;

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticationUser')
    return !(user === null)
  }

}
