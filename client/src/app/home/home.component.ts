import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService, AlertService, AuthenticationService } from '../_services/index';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    private isVisible = true;
 
    constructor(
        private userService: UserService, 
        private alertService: AlertService , 
        private authenticationService: AuthenticationService,
        private router: Router
        ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        var response = this.loadAllUsers();
        //console.log(this.loadAllUsers());
        
        //statusText
            //_body
            // :
            // "{↵  "code": "E_USER_NOT_FOUND",↵  "message": "User with specified credentials is not found",↵  "data": {}↵}"
            // headers
            // :
            // Headers
            // _headers
            // :
            // Map
            // _normalizedNames
            // :
            // Map
            // __proto__
            // :
            // Object
            // ok
            // :
            // false
            // status
            // :
            // 401
            // statusText
            // :
            // "Unauthorized"
            // type
            // :
            // 2
            // url
            // :
            // "http://127.0.0.1:3000/v1/users"

    }
 
    viewUser(id: number) {
        this.userService.getUserById(id).subscribe(users => { 
                    this.users = users.data;
                });
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
      
        this.userService.getAll()
            .subscribe(users => { 
                    this.users = users.data;
                },
                error => {
                    if (error.status === 401)
                    {                   
                        this.alertService.error('User with specified credentials is not found', true);
                        this.authenticationService.logout();
                        this.router.navigate(['/home']);
                    } 
                });
    }
}
