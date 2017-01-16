import { Injectable } from '@angular/core';
import { APIHttpService } from './../../shared/api/api-http.service';
import { URLSearchParams } from '@angular/http';
import { ConfigService } from './config/config.service';

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=AIzaSyC6iOO-3rEMj4iKsAsO2Ncxx-K3dHwhv64

interface coords {
    lat: Number,
    lng: Number
};

@Injectable()
export class VenueService {

    private API_KEY;

    constructor(private httpService: APIHttpService, private configService: ConfigService) {
        this.API_KEY = configService.get().GOOGLE_PLACES_API_KEY;
    }

    search(type: string, keyword: string, coords: coords, radius: number) {
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
        let params = new URLSearchParams();
        params.set('location', `${coords.lat},${coords.lng}`);
        params.set('radius', radius.toString());
        params.set('type', type);
        params.set('keyword', keyword);
        params.set('key', this.API_KEY);
        return this.httpService.get(url, { search: params });
    }

}