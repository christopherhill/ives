'use strict';

import { NgModule } from '@angular/core';
import { routing } from './dashboard.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { EnsemblesComponent } from './ensembles/ensembles.component';
import { TabsModule } from 'ng2-bootstrap';
import { PulseComponent } from './pulse/pulse.component';
import { ChartsModule } from 'ng2-charts/components/charts/charts'; //ng2-charts';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      routing,
      TabsModule.forRoot(),
      ChartsModule
    ],
    declarations: [
      DashboardComponent,
      PulseComponent,
      EnsemblesComponent
    ],
    bootstrap: [DashboardComponent]
})

export class DashboardModule {};
