import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailTemplateRoutingModule } from './email-routing.module';
import { DataTableModule } from "angular2-datatable";
import { RouterModule } from '@angular/router';

import { EmailTemplateComponent } from './email.component';
import { EmailTemplateService } from '../../_services/index';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmailTemplateRoutingModule,
    DataTableModule,
    RouterModule
  ],
  declarations: [ EmailTemplateComponent ],
  providers: [ EmailTemplateService ],
})
export class EmailTemplateModule { }
