import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { DataTablesModule } from "angular-datatables";
import { RouterModule } from '@angular/router';

import { PlanComponent } from './plan.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanRoutingModule,
    DataTablesModule.forRoot(),
    RouterModule
  ],
  declarations: [ PlanComponent ]
})
export class PlanModule { }
