import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../../_models/index';
import { UserService, AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "desc";
    
    users: User[] = [];
    isLoading = true;

    user = {};
    isEditing = false;
    isAdding = false;
    isShow = false;
    currentUser: User;
    private isVisible = true;

    constructor(private router: Router, private http: Http, private userService: UserService, private alertService: AlertService , private authenticationService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
      this.isShow = true;
      this.loadAllUsers();
    }

  enableEditing(user) {
    this.isEditing = true;
    this.isAdding = false;
    this.isShow = false;
    this.user = user;
  }
  enableAdding(user) {
    this.isAdding = true;
    this.isEditing = false;
    this.isShow = false;
    this.user = { };
  }

  cancelEditing() {
    this.isEditing = false;
    this.isAdding = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('item editing cancelled.', true);
    // reload the cats to reset the editing
    this.loadAllUsers();
  }
  cancelAdding() {
    this.isEditing = false;
    this.isAdding = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('item adding cancelled.', true);
    // reload the cats to reset the editing
    this.loadAllUsers();
  }

  showall() {
    this.isEditing = false;
    this.isAdding = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('show all users.', true);
    // reload the cats to reset the editing
    this.loadAllUsers();
  }

  signup(user) {
    //console.log(user);
        //this.isLoading = true;
        this.userService.create(user)
            .subscribe(
                res => {
                  this.isEditing = false;
                  this.isAdding = false;
                  this.isShow = true;
                  this.user = user;
                  console.log(this.isShow);
                    this.alertService.success('Add user successful', true);
                    this.router.navigate(['/profile']);
                },
                error => {
                  //console.log(error._body.data.email.message);
                    this.alertService.error(error._body);
                    this.isLoading = false;
                });
    }

  editUser(user) {
    this.userService.update(user).subscribe(
      res => {
        this.isEditing = false;
        this.isAdding = false;
        this.isShow = true;
        this.user = user;
        this.alertService.success('item edited successfully.', true);
      },
      error => console.log(error)
    );
  }
 
    viewUser(id: number) {
        this.userService.getUserById(id).subscribe(users => { 
                    this.users = users.data;
                });
    }

    deleteUser(user) {
      // console.log(user.id);
      if (window.confirm('Are you sure you want to permanently delete this item?')) {
        this.userService.delete(user.id).subscribe(
          res => {
            const pos = this.users.map(elem => { return elem.id; }).indexOf(user.id);
            this.users.splice(pos, 1);
            this.alertService.success('item deleted successfully.', true);
          },
          error => console.log(error)
        );
      }
    }
 
    private loadAllUsers() {
        this.userService.getAll()
            .subscribe(users => { 
                    this.users = users.data;
                    //console.log(this.users);
                },
                error => {
                    if (error.status === 401)
                    {                   
                        this.alertService.error('User with specified credentials is not found', true);
                        this.authenticationService.logout();
                    } 
                },
                () => this.isLoading = false);
    }

}
