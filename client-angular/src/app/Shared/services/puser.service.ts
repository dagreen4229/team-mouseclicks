import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Puser } from 'src/app/models/puser';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Puser[]>(`${config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/${id}`);
    }

    register(user: Puser) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: Puser) {
        return this.http.put(`${config.apiUrl}/users/${user.User_ID}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
