import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My test App for Internship';

  ngAfterViewInit() {

    var map = new L.Map("mapid")

   let openmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXJhY2hlcnZ5YWtvdmEiLCJhIjoiY2p2cGRsMmV3MDFzczQ4cXNjMm13dmh6aSJ9.eMSVCm_kPNotjLCBPM6DKw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'}).addTo(map);

    let route = L.Routing.control({
      waypoints: [
        L.latLng(40.5663651,-75.6032277),
        L.latLng(40.00195, -76.073299),
        L.latLng(42.3673945,-83.0750408)
      ]
    }).addTo(map);

  }
    }


