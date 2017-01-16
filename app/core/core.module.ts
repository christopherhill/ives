'use strict';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { ConfigService } from './config/config.service';
import { VenueService } from './venue.service';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
    ],
    declarations: [
      HeaderTitleComponent,
      IconNavComponent
    ],
    providers: [
        ConfigService,
        VenueService
    ],
    exports: [
        HeaderTitleComponent,
        IconNavComponent
    ]
})

export class CoreModule {};
