'use strict';

import { ngModule } from '@angular/core';
import { routing } from './root.routes';

const providers = [];

@NgModule({
    imports: [FormsModule, HttpModule, BrowserModule, routing],
    directives: [],
    providers: providers,
    bootstrap: [AuthComponent]
})
export class RootModule {};

export const providers = providers;
