import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './consult-layout.component.html'
})
export class ConsultLayoutComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
	constructor( public toast: ToastComponent, private router: Router ) {
    if(this.currentUser.type=='1')
    {
      this.router.navigate(["/admin"]);
    }
   }
  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}
