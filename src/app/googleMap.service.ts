import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GoogleMapService {

  constructor(private http: HttpClient) { }

  getGoogleMap() {
    return this.http.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyA5J4iPzVjHFahU3Q2NMChznQfdOBK9REg&callback=initMap')
  }
}
