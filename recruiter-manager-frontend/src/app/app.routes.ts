import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login';
import { JobListComponent } from './jobs/job-list/job-list';
import { JobCreateComponent } from './jobs/job-create/job-create';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'jobs', component: JobListComponent },
    { path: 'jobs/create', component: JobCreateComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);