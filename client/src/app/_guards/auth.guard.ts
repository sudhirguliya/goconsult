import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          //console.log(route.url);
        if (localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

//     canActivate() {
//     return this.authService
//             .getCurrentUser()
//             .map(user => user.role === 'admin')
//             .first();
//   }
     canActivates(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
          //console.log(route.url);
        if (localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}