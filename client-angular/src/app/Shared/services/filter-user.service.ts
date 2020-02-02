import { Injectable } from '@angular/core';
import { Observable, of, Subject } from "rxjs";
import { Puser } from 'src/app/models/puser';

@Injectable({
  providedIn: 'root'
})
export class FilterUserService {

  setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();
	constructor() {}
	fetchUsers(): Observable<any> {
		return of(Puser);
	}

}
