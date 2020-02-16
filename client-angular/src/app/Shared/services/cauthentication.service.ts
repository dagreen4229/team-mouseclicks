import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cuser } from 'src/app/models/cuser';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CauthenticationService {
  private currentUserSubject: BehaviorSubject<Cuser>;
  public currentUser: Observable<Cuser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Cuser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): Cuser {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
      .pipe(map(user => {
        if(user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
