import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService, AuthenticationService } from '../_services/index';

import { contentHeaders } from '../../common/headers';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	  model: any = {};
    loading = false;
	constructor(
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

	// signup(event, username, email, password) {
  //   event.preventDefault();
  //   let body = JSON.stringify({ username, email, password });
  //   this.http.post('http://127.0.0.1:3000/v1/auth/signup', body, { headers: contentHeaders })
  //     .subscribe(
  //       response => {
  //         localStorage.setItem('token', response.json().data.token);
  //         this.router.navigate(['home']);
  //       },
  //       error => {
  //         alert(error.text());
  //         console.log(error.text());
  //       }
  //     );
  // }

  signup() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['home']);
                },
                error => {
                  //console.log(error._body.data.email.message);
                    this.alertService.error(error._body);
                    this.loading = false;
                });
            // .subscribe(
            //     data => {
            //       console.log(data + "hi");
            //         this.alertService.success('Registration successful', true);
            //         localStorage.setItem('token', data.data.token);
            //         localStorage.setItem('currentUser', data.data.user);
            //         this.router.navigate(['home']);
            //     },
            //     error => {
            //         this.alertService.error(error);
            //         this.loading = false;
            //     });
    }

  // login(event) {
  //   event.preventDefault();
  //   this.router.navigate(['login']);	
  // }

  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();
    if (localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
            // logged in so return true
           // not logged in so redirect to login page with the return url
          this.router.navigate(['/home']);
        }
  }

}
