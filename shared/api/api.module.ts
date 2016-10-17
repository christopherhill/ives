'use strict';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
      routing
    ],
    declarations: [
      EntityComponent
    ],
    bootstrap: [EntityComponent]
})

export class APIModule {};
