// Import our dependencies
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from '../common/auth.guard';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home',   component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**',     component: LoginComponent },
];