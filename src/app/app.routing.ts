﻿import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},

    // otherwise redirect to home
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
