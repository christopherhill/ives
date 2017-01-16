'use strict';

import { Input, Output, Component, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

// providers below reflect component wide sharing
@Component({
	selector: 'header-title',
	//styles: [require('./root.sass').toString()],
	template: require('./header-title.html')
})

export class HeaderTitleComponent {

	@Input() title: String = '';
    @Input() subTitle: String = '';

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


}
