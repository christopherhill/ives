'use strict';

import { NgModule } from '@angular/core';
import { routing } from './personnel.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PersonnelComponent } from './personnel.component';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      routing
    ],
    declarations: [
      PersonnelComponent
    ],
    bootstrap: [PersonnelComponent]
})

export class PersonnelModule {};
