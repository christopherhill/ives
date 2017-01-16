import { RootComponent } from './root.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { entityRoutes } from './../entity/entity.routes';
import { programRoutes } from './../program/program.routes';
import { manageRoutes } from './../manage/manage.routes';
import { personnelRoutes } from './../personnel/personnel.routes';
import { auditionsRoutes } from './../auditions/auditions.routes';

export const rootRoutes: Routes = [
  ...entityRoutes,
  ...programRoutes,
  ...manageRoutes,
  ...personnelRoutes,
  ...auditionsRoutes,
  { path: '', component: RootComponent },
  { path: '**', component: RootComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(rootRoutes);
