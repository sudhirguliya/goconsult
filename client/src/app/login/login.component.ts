import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

import { contentHeaders } from '../../common/headers';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

  login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                  this.alertService.success('login successful', true);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    ngOnInit() {
      // reset login status
      //this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
      //console.log(this.returnUrl);

      if (localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
            // logged in so return true
           // not logged in so redirect to login page with the return url
          this.router.navigate(['/home']);
        }

        
    }

  // login(event, email, password) {
  //   event.preventDefault();
  //   let body = JSON.stringify({ email, password });
  //   this.http.post('http://127.0.0.1:3000/v1/auth/signin', body, { headers: contentHeaders })
  //     .subscribe(
  //       response => {
  //         localStorage.setItem('token', response.json().data.token);

  //         	//localStorage.setItem('token',res.data.token);
  //      		//location.href="category";
  //         this.router.navigate(['home']);
  //       },
  //       error => {
  //         alert(error.text());
  //         console.log(error.text());
  //       }
  //     );
  // }

  // signup(event) {
  //   event.preventDefault();
  //   this.router.navigate(['signup']);
  // }

}
