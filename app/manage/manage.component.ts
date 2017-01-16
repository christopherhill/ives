'use strict';

import { Input, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'manage',
  template: require('./manage.html')
})

export class ManageComponent {

	public data = require('./manage.json');
	
	constructor(
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
    }

}
