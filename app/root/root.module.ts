'use strict';

import { NgModule } from '@angular/core';
import { routing } from './root.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// import { EntityComponent } from './../entity/entity.component';
import { RootComponent } from './root.component';
import { EntityModule } from './../entity/entity.module';
import { ProgramModule } from './../program/program.module';
import { ManageModule } from './../manage/manage.module';
import { DashboardModule } from './../dashboard/dashboard.module';
import { CommonModule } from '@angular/common';
import { PersonnelModule } from './../personnel/personnel.module';
import { CoreModule } from './../core/core.module';
import { AuditionsModule } from './../auditions/auditions.module';
import { APIModule } from './../../shared/api/api.module';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      CommonModule,
      EntityModule,
      ProgramModule,
      ManageModule,
      DashboardModule,
      PersonnelModule,
      CoreModule,
      AuditionsModule,
      routing,
      APIModule
    ],
    declarations: [
      RootComponent
    ],
    bootstrap: [RootComponent]
})

export class RootModule {};
