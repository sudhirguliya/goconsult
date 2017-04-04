import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailTemplateComponent } from './email.component';

const routes: Routes = [
  {
    path: '',
    component: EmailTemplateComponent,
    data: {
      title: 'Email Template'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailTemplateRoutingModule {}
