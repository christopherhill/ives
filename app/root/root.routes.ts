import { RootComponent } from './root.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const RootRoutes = [
  { path: '', redirectTo: '/auth/main', pathMatch: 'full' },
  { path: '**', component: RootComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(RootRoutes);
