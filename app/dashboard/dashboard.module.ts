'use strict';

import { NgModule } from '@angular/core';
import { routing } from './dashboard.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      routing
    ],
    declarations: [
      DashboardComponent
    ],
    bootstrap: [DashboardComponent]
})

export class DashboardModule {};
