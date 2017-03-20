import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    /*if (tokenNotExpired()) {
      return true;
    }*/

    if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }

    this.router.navigate(['/login']);
    return false;
  }
}