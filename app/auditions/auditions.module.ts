'use strict';

import { NgModule } from '@angular/core';
import { routing } from './auditions.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuditionsComponent } from './auditions.component';
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
      AuditionsComponent
    ],
    bootstrap: [AuditionsComponent]
})

export class AuditionsModule {};
