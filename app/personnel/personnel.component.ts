'use strict';

import { Input, Component, EventEmitter } from '@angular/core';

const data = require('./personnel.json');

@Component({
  selector: 'personnel',
  template: require('./personnel.html')
})

export class PersonnelComponent {

	@Input() data = data;

	constructor(
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {

  }

}
