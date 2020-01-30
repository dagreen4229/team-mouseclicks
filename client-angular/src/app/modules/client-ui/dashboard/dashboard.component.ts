import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Task } from '@../../models';
import { UserService, AuthenticationService } from //'@/_services';
    import { Task } from 'src/app/models/task';

@Component({ templateUrl: 'dashboard.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: Task,
    currentUserSubscription: Subscription;
    users: Task[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUserSubscription =  this.authenticationService.currentUser.subscribe(task => {
            this.currentUser = task;
        });
    }
}

//  selector: 'app-dashboard',
//  templateUrl: './dashboard.component.html',
// styleUrls: ['./dashboard.component.css']
//})


  ngOnInit() {
      this.loadAllUsers();
  }

  ngOnDestroy() {
      this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => {
          this.loadAllUsers()
      });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

}
