'use strict';

import { Input, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'program',
  template: require('./program.html')
})

export class ProgramComponent {

    @Input() symphonies: Array<String>;

	constructor(
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
      let nums: Array<Number> = [1,2,3,4,5,6,7,8,9];
      this.symphonies = nums.map(num => `Symphony No. ${num} | Beethoven, Ludwig van`);
    }

}
