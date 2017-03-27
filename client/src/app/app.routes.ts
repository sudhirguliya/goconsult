// Import our dependencies
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
//import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_guards/index';
import { NotFoundComponent } from './not-found/not-found.component'

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// Define which component should be loaded based on the current URL
const appRoutes: Routes = [
  { path: '',       component: HomeComponent },
  { path: 'login',  component: LoginComponent},
  { path: 'logout',  component: LogoutComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: SignupComponent },
  { path: 'home',   component: HomeComponent }, // , pathMatch: 'full'
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  
  {
    path: 'consult',
    redirectTo: 'consult/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    redirectTo: 'consult/profile',
    pathMatch: 'full',
  },

  {
    path: 'consult',
    component: FullLayoutComponent,  canActivate: [AuthGuard],
    data: {
      title: 'Consultant'
    },
    children: [
      {
        path: 'dashboard',  canActivate: [AuthGuard], 
        loadChildren: './consult/dashboard/dashboard.module#DashboardModule'
      },
       {
         path: 'profile',  canActivate: [AuthGuard], 
         loadChildren: './consult/profile/profile.module#ProfileModule'
       },
      // {
      //   path: 'icons',
      //   loadChildren: './icons/icons.module#IconsModule'
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: './widgets/widgets.module#WidgetsModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './chartjs/chartjs.module#ChartJSModule'
      // }
    ]
  },
  { path: '**',     component: NotFoundComponent },
]; 

export const routing = RouterModule.forRoot(appRoutes, {
      useHash: false
    });