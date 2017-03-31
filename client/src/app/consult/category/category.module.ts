import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule }   from '@angular/forms';
import {DataTableModule} from "angular2-datatable";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    DataTableModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
