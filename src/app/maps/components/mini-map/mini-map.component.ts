import { AfterViewInit, Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit{

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;


  ngAfterViewInit(): void {
    if(!this.divMap?.nativeElement) throw "Map div not found";
    if( !this.lngLat ) throw "LngLat can't be null";

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false
    })

    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

    const marker = new Marker({
      color
    })
      .setLngLat(this.lngLat)
      .addTo(this.map)
  }


}
