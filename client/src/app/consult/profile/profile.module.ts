import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import {DataTableModule} from "angular2-datatable";
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    DataTableModule,
    RouterModule
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
