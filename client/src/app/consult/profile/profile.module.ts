import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule }   from '@angular/forms';
import {DataTableModule} from "angular2-datatable";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    DataTableModule
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
