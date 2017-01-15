'use strict';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PersonnelComponent } from './personnel.component';

export const personnelRoutes: Routes = [
  { path: 'personnel', component: PersonnelComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(personnelRoutes);
