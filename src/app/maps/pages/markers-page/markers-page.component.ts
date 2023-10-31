import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;


  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-70.755,-33.355)

  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 15
    })

  }

    createMarker(){

      if ( !this.map ) return;

      const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
      const lngLat = this.map.getCenter();

      this.addMarker( lngLat, color );
    }

    addMarker( lngLat: LngLat, color: string ){
      if( !this.map ) return;

      const marker = new Marker({
        color,
        draggable: true
      })
      .setLngLat( lngLat )
      .addTo( this.map )
    }

    //referencia para crear markers por codigo
    /* // para modificar el marker
    const markerHtml = document. createElement('div');
    markerHtml.innerHTML = "Felipe"

    const marker = new Marker({
      element: markerHtml
    })
      .setLngLat( this.currentLngLat )
      .addTo( this.map ) */



}
