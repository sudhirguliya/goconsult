import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { DataTableModule } from "angular2-datatable";
import { RouterModule } from '@angular/router';

import { PlanComponent } from './plan.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanRoutingModule,
    DataTableModule,
    RouterModule
  ],
  declarations: [ PlanComponent ]
})
export class PlanModule { }
