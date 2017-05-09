import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from './subcategory.component';
import { SubCategoryRoutingModule } from './subcategory-routing.module';
import { FormsModule }   from '@angular/forms';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SubCategoryRoutingModule,
    DataTablesModule.forRoot(),
  ],
  declarations: [SubCategoryComponent]
})
export class SubCategoryModule { }
