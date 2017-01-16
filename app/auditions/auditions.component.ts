'use strict';

import { Input, Component, EventEmitter } from '@angular/core';

const data = require('./auditions.json');

@Component({
  selector: 'auditions',
  template: require('./auditions.html')
})

export class AuditionsComponent {

	@Input() data = data;

	constructor(
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {

  }

}
