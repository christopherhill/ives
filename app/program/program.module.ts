'use strict';

import { NgModule } from '@angular/core';
import { routing } from './program.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ProgramComponent } from './program.component';
import { EntityModule } from './../entity/entity.module';

@NgModule({
    imports: [
      FormsModule,
      HttpModule,
      BrowserModule,
      EntityModule,
      routing
    ],
    declarations: [
      ProgramComponent
    ],
    bootstrap: [ProgramComponent]
})

export class ProgramModule {};
