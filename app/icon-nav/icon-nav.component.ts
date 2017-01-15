'use strict';

import { Input, Output, Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

const links = require('./icon-nav.json');

// providers below reflect component wide sharing
@Component({
	selector: 'leftnav',
	//styles: [require('./root.sass').toString()],
	template: require('./icon-nav.html')
})

export class IconNavComponent {

	@Input() links: Array<Object> = links;
//	@Output() navigate: Function;

	constructor(
		private DomSanitizer: DomSanitizer,
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {
		

	}

	ngOnDestroy() {
	}

	ngOnInit() {
  }

  public navigate(dest) {
	  this.router.navigate(['/' + dest]);
  }

}
