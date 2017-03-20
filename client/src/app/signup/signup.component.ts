import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { contentHeaders } from '../../common/headers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	
	constructor(public router: Router, public http: Http) {}


	signup(event, username, email, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, email, password });
    this.http.post('http://127.0.0.1:3000/v1/auth/signup', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('token', response.json().data.token);
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  login(event) {
    event.preventDefault();
    this.router.navigate(['login']);	
  }

  ngOnInit() {
  }

}
