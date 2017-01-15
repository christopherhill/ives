'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

// providers below reflect component wide sharing
@Component({
	selector: 'leftnav',
	//styles: [require('./root.sass').toString()],
	template: require('./icon-nav.html')
})

export class IconNavComponent {

	constructor(
		private DomSanitizer: DomSanitizer,
		public router: Router
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
  }

}
