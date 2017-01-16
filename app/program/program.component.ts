'use strict';

import { Input, Component, EventEmitter } from '@angular/core';
import { VenueService } from './../core/venue.service';
import { ConfigService } from './../core/config/config.service';

@Component({
  selector: 'program',
  template: require('./program.html')
})

export class ProgramComponent {

  @Input() symphonies: Array<String>;

	constructor(
    private venueService: VenueService,
    private configService: ConfigService
	) {}

	ngOnDestroy() {
	}

	ngOnInit() {
    let nums: Array<Number> = [1,2,3,4,5,6,7,8,9];
    this.symphonies = nums.map(num => `Symphony No. ${num} | Beethoven, Ludwig van`);
  }

  // https://developers.google.com/places/web-service/supported_types?authuser=1
  public venueSearch() {

    const types = [
      'art_gallery', 'bar', 'cafe', 'church', 
      'city_hall', 'library', 'movie_theater', 'museum',
      'night_club', 'park', 'school', 'stadium', 
      'synagogue', 'university'
    ];
    this.configService.getUserLocation().subscribe((coords) => {
      console.log('coords: ', coords);
      this.venueService.search('school', '', coords, 50).subscribe(
        results => console.log(results), 
        err => console.log('shit: ', err)
      );
    });
  
  }

}
