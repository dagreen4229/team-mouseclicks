import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  // Java Spring Boot uses port 8080
  apiUrl: string = "http://localhost:8080/tasks";



  constructor(private http: HttpClient) {}

}
