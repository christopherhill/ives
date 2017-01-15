'use strict';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
