import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    DataTablesModule.forRoot(),
    RouterModule
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
