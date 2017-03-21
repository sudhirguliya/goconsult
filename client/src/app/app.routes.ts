// Import our dependencies
import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
//import { AuthGuard } from '../common/auth.guard';
import { AuthGuard } from './_guards/index';

// Define which component should be loaded based on the current URL
const appRoutes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent},
  { path: 'logout',  component: LogoutComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'register', component: SignupComponent },
  { path: 'home',   component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**',     component: LoginComponent },
]; 

export const routing = RouterModule.forRoot(appRoutes, {
      useHash: false
    });