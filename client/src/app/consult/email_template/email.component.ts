import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { EmailTemplate } from '../../_models/index';
import { EmailTemplateService, AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailTemplateComponent implements OnInit {
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "desc";
    
    plans: EmailTemplate[] = [];
    isLoading = true;

    user = {};
    isEditing = false;
    isAdding = false;
    isShow = false;
    isView = false
    //currentUser: Plan;
    private isVisible = true;

    constructor(private router: Router, private http: Http, private emailTemplateService: EmailTemplateService, private alertService: AlertService , private authenticationService: AuthenticationService) {
       // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
      this.isShow = true;
      this.loadAllPlans();
    }

  enableEditing(user) {
    this.isEditing = true;
    this.isAdding = false;
    this.isShow = false;
    this.isView = false;
    this.user = user;
  }
  enableAdding(user) {
    this.isAdding = true;
    this.isEditing = false;
    this.isShow = false;
    this.isView = false;
    this.user = { };
  }

  cancelEditing() {
    this.isEditing = false;
    this.isAdding = false;
    this.isView = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('item editing cancelled.', true);
    // reload the cats to reset the editing
    this.loadAllPlans();
  }
  cancelAdding() {
    this.isEditing = false;
    this.isAdding = false;
    this.isView = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('item adding cancelled.', true);
    // reload the cats to reset the editing
    this.loadAllPlans();
  }

  showall() {
    this.isEditing = false;
    this.isAdding = false;
    this.isView = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('show all plans.', true);
    // reload the cats to reset the editing
    this.loadAllPlans();
  }

  addPlan(user) {
    //console.log(user);
        //this.isLoading = true;
        this.emailTemplateService.create(user)
            .subscribe(
                res => {
                  const newUser = res.data;
                  this.plans.push(newUser);
                  //this.addCatForm.reset();
                  this.isEditing = false;
                  this.isAdding = false;
                  this.isView = false;
                  this.isShow = true;
                  //console.log(newUser);
                  //const pos = this.users.map(elem => { return elem.id; }).indexOf(user.id);
                  //this.users.unshift(user);
                  //this.loadAllUsers();
                  //console.log(this.users);
                  this.router.navigate(['/consult/email_template']);
                  this.alertService.success('Add email template successful', true);
                  
                },
                error => {
                  //console.log(error._body.data.email.message);
                    this.alertService.error(error._body.message);
                    this.isLoading = false;
                });
    }

  editPlan(user) {
    //console.log(user);
    this.emailTemplateService.update(user).subscribe(
      res => {
        this.isEditing = false;
        this.isAdding = false;
        this.isView = false;
        this.isShow = true;
        this.user = user;
        this.alertService.success('item edited successfully.', true);
      },
      error => {
                  //console.log(error._body.data.email.message);
                    this.alertService.error(error._body.message);
                    this.isLoading = false;
    });
  }
 
    viewUser(temp) {
        this.isEditing = false;
        this.isAdding = false;
        this.isShow = false;
        this.isView = true;
        this.emailTemplateService.getUserById(temp.id).subscribe(plans => { 
          this.user = plans.data;
        });
    }

    deleteUser(user) {
       //console.log(this.plans);
      if (window.confirm('Are you sure you want to permanently delete this item?')) {
        this.emailTemplateService.delete(user.id).subscribe(
          res => {
             const pos = this.plans.map(elem => { return elem.id; }).indexOf(user.id);
             this.plans.splice(pos, 1);
            //  this.isEditing = false;
            //  this.isAdding = false;
            //  this.isShow = true;
            //this.isLoading = true;
            this.alertService.success('item deleted successfully.', true);
            //this.loadAllUsers();
            this.router.navigate(['./consult/plan']);
          },
          error => console.log(error)
        );
      }
    }
 
    private loadAllPlans() {
        this.emailTemplateService.getAll()
            .subscribe(plans => { 
                    this.plans = plans.data;
                    //console.log(this.plans);
                },
                error => {
                  console.log(error);
                    if (error.status === 401)
                    {                   
                        this.alertService.error('User with specified credentials is not found', true);
                        this.authenticationService.logout();
                    } 
                    if (error.status === 500)
                    {                   
                        this.alertService.error('Internal server error, No auth token.', true);
                        this.authenticationService.logout();
                    } 
                },
                () => this.isLoading = false);
    }

}
