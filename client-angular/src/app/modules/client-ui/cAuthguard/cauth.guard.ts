import { CauthenticationService } from 'src/app/Shared/services/cauthentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class cAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: CauthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/clogin'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}