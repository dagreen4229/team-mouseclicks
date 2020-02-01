import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Puser } from "./models/puser";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PuserService {
  // Java Spring Boot uses port 8080
  apiUrl: string = "http://localhost:8080/tasks";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/tasks";

  // Express will use port 3000
  //apiUrl: string = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) {}

  getPuser(): Observable<Puser[]> {
    return this.http.get<Puser[]>(this.apiUrl);
  }

  addPuser(task): Observable<Puser> {
    return this.http.post<Puser>(this.apiUrl, Puser);
  }
}
