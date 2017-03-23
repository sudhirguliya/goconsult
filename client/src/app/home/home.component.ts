import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
 
    constructor(private userService: UserService) {
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
 
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
 
    private loadAllUsers() {
      
        this.userService.getAll().subscribe(users => { this.users = users.data; console.log(users.data.statusText);});
        
    }
}
