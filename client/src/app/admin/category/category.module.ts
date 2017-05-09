import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryRoutingModule } from './category-routing.module';
import { FormsModule }   from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    DataTablesModule.forRoot(),
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
