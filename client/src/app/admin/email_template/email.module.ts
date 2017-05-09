import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailTemplateRoutingModule } from './email-routing.module';
import { DataTablesModule } from "angular-datatables";
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
   DataTablesModule.forRoot(),
    RouterModule
  ],
  declarations: [ EmailTemplateComponent ],
  providers: [ EmailTemplateService ],
})
export class EmailTemplateModule { }
