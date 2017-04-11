import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './subcategory.component';
import { SubCategoryRoutingModule } from './subcategory-routing.module';
import { FormsModule }   from '@angular/forms';
import {DataTableModule} from "angular2-datatable";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SubCategoryRoutingModule,
    DataTableModule
  ],
  declarations: [SubCategoryComponent]
})
export class SubCategoryModule { }
