import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  ];