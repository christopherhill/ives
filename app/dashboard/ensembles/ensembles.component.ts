'use strict';

import { Input, Component, EventEmitter } from '@angular/core';

const data = require('./ensembles.json');

@Component({
  selector: 'ensembles',
  template: require('./ensembles.html')
})
export class EnsemblesComponent {

  @Input() data = data;
	constructor(
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
    }

}
