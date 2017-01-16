'use strict';

import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { APIHttpService } from './api-http.service';

@NgModule({
    imports: [
      HttpModule
    ],
    providers: [
      { provide: APIHttpService, 
        useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
          return new APIHttpService(backend, defaultOptions);
        },
        deps: [XHRBackend, RequestOptions]   
    }]
})

export class APIModule {};
