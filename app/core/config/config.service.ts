import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const config = require('./config.json');

@Injectable()
export class ConfigService {

    private error: boolean = false;

    constructor(){}

    get() {
        return config;
    }

    getUserLocation(): Observable<any> {
        if (!navigator.geolocation) throw Error('this browser does not support location');
        return Observable.create(observer => {
          navigator.geolocation.getCurrentPosition((position) => {
            let coords = { lat: position.coords.latitude, lng: position.coords.longitude };
            observer.next(coords);
          }, (error) => { observer.error({ errorMsg: error }); });
        });
    }

}