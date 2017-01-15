'use strict';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProgramComponent } from './program.component';

export const programRoutes: Routes = [
  { path: 'program', component: ProgramComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(programRoutes);
