'use strict';

import { NgModule } from '@angular/core';
import { routing } from './personnel.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PersonnelComponent } from './personnel.component';
import { CoreModule } from './../core/core.module';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      routing,
      CoreModule
    ],
    declarations: [
      PersonnelComponent
    ],
    bootstrap: [PersonnelComponent]
})

export class PersonnelModule {};
