'use strict';

import { NgModule } from '@angular/core';
import { routing } from './manage.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ManageComponent } from './manage.component';
import { CoreModule } from './../core/core.module';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      CoreModule,
      routing
    ],
    declarations: [
      ManageComponent
    ],
    bootstrap: [ManageComponent]
})

export class ManageModule {};
