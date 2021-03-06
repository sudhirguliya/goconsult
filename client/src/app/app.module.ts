import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';

import { AlertService, AuthenticationService, UserService , CategoryService, SubCategoryService, PlanService } from './_services/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

import { routing } from './app.routes';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { ConsultLayoutComponent } from './layouts/consult-layout.component';

import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
//import { MenuComponent } from './shared/menu.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { ToastComponent } from './shared/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AlertComponent,
    LogoutComponent,
    ToastComponent,
    NotFoundComponent,
    FullLayoutComponent,
    ConsultLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTablesModule.forRoot(),
    routing,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CategoryService,
		    SubCategoryService,
		    PlanService,
      //  MenuComponent,
        ToastComponent
        // providers used to create fake backend
        //fakeBackendProvider,
        //MockBackend,
        //BaseRequestOptions
    ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
