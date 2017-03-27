import { Component, OnInit , HostListener } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
//import { Document } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
        '(window:scroll)': 'add_header($event)'
    }
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
	private isClassVisible=false;
	private rs= true;
	private usd= false;
	private hide = {'sone':false,'stwo':false,'sthree':false,'sfour':false};
	private showPlus = {'sone':true,'stwo':true,'sthree':true,'sfour':true};
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
		
      // this.loadAllUsers();
    }
	 add_header(evt) {
        let currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
		if(currPos>50)
		{
			this.isClassVisible=true;
		}else{
			this.isClassVisible=false;
		}
    }
    
	changePlan(plan)
	{
		if(plan==1)
		{
			this.rs=true;
			this.usd=false;
		}
		else{
			this.rs=false;
			this.usd=true;
		}
		
	}
	hideShow(hide)
	{
		let x =this.hide['s'+hide];
		let Y =this.showPlus['s'+hide];
		for (let key in this.hide) {
		this.hide[key]=false;
		}
		for (let key in this.showPlus) {
		this.showPlus[key]=true;
		}
		if(x!=true)
		this.showPlus['s'+hide]=false;
		//alert(this.hide['s'+hide]);
		if(x!=true)
		this.hide['s'+hide] =!this.hide['s'+hide];
	}
    
}
