import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  
	constructor( public toast: ToastComponent ) {
currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
