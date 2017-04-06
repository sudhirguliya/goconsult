import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

import { contentHeaders } from '../../common/headers';


@Component({
  selector: 'app-logout',
  //templateUrl: './logout.component.html',
  //styleUrls: ['./logout.component.css']
  template :''
})
export class LogoutComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.alertService.success('logout successful, happy to see you', true);
     this.router.navigate(['/login']);
        
  }

}
