'use strict';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ManageComponent } from './manage.component';

export const manageRoutes: Routes = [
  { path: 'manage', component: ManageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(manageRoutes);
