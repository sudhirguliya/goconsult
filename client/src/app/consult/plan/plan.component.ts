import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Plan } from '../../_models/index';
import { PlanService, AlertService, AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "desc";
    
    plans: Plan[] = [];
    isLoading = true;

    user = {};
    isEditing = false;
    isAdding = false;
    isShow = false;
    //currentUser: Plan;
    private isVisible = true;

    constructor(private router: Router, private http: Http, private planService: PlanService, private alertService: AlertService , private authenticationService: AuthenticationService) {
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
    this.loadAllPlans();
  }
  cancelAdding() {
    this.isEditing = false;
    this.isAdding = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('item adding cancelled.', true);
    // reload the cats to reset the editing
    this.loadAllPlans();
  }

  showall() {
    this.isEditing = false;
    this.isAdding = false;
    this.isShow = true;
    this.user = {};
    this.alertService.error('show all plans.', true);
    // reload the cats to reset the editing
    this.loadAllPlans();
  }

  addPlan(user) {
    //console.log(user);
        //this.isLoading = true;
        this.planService.create(user)
            .subscribe(
                res => {
                  const newUser = res.data;
                  this.plans.push(newUser);
                  //this.addCatForm.reset();
                  this.isEditing = false;
                  this.isAdding = false;
                  this.isShow = true;
                  //console.log(newUser);
                  //const pos = this.users.map(elem => { return elem.id; }).indexOf(user.id);
                  //this.users.unshift(user);
                  //this.loadAllUsers();
                  //console.log(this.users);
                  this.router.navigate(['/consult/plan']);
                  this.alertService.success('Add plan successful', true);
                  
                },
                error => {
                  //console.log(error._body.data.email.message);
                    this.alertService.error(error._body);
                    this.isLoading = false;
                });
    }

  editPlan(user) {
    //console.log(user);
    this.planService.update(user).subscribe(
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
        this.planService.getUserById(id).subscribe(plans => { 
                    this.plans = plans.data;
                });
    }

    deleteUser(user) {
       //console.log(this.plans);
      if (window.confirm('Are you sure you want to permanently delete this item?')) {
        this.planService.delete(user.id).subscribe(
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
        this.planService.getAll()
            .subscribe(plans => { 
                    this.plans = plans.data;
                    //console.log(this.plans);
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
