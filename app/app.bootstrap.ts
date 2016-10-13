import { RootModule } from './root/root.module';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (window.location.hostname.indexOf('localhost') < 0) {
  enableProdMode();
}

platformBrowserDynamic.bootstrapModule(RootModule);
