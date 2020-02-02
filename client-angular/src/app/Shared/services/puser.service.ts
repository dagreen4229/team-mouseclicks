import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Puser } from 'src/app/models/puser';
import { environment } from '@environments/environment'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }


    getAll() {
        return this.http.get<Puser[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/${id}`);
    }

    register(user: Puser) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: Puser) {
        return this.http.put(`${environment.apiUrl}/users/${user.User_ID}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}
