'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// providers below reflect component wide sharing
@Component({
	selector: 'root',
	styleUrl: require('./root.sass'),
	templateUrl: require('./root.html')
})

export class RootComponent {

	@Input() logo = require('./../../assets/logo.svg');

	constructor(
		private DomSanitizer: DomSanitizer,
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
  }

}
