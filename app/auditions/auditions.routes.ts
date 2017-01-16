'use strict';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuditionsComponent } from './auditions.component';

export const auditionsRoutes: Routes = [
  { path: 'auditions', component: AuditionsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(auditionsRoutes);
