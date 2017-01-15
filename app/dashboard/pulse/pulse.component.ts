'use strict';

import { Input, Component, EventEmitter } from '@angular/core';

const data = require('./pulse.json');

@Component({
  selector: 'pulse',
  template: require('./pulse.html')
})
export class PulseComponent {

  public lineChartType: string = 'line';
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };

  @Input() data = data;
	constructor(
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
    

  }

}
