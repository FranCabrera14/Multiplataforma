import { Component, OnInit } from '@angular/core';
import {PlacesService} from './places.service';
import {  places } from "./places.model";


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage  {

titulo: string = "Mi enemigo se llama Cristian"

  public places : places[] = [];
  constructor(private placesService: PlacesService) {

   }

  /**
   * ngOnInit() {
    this.places=this.placesService.getPlaces();// llamamos al metodo que devuelve el listado de lugares completo
    
  }
  /*
  /**
   * ionViewWillEnter() --> Método que se llama cada vez que se entra en la pagina
   *
   */
  ionViewWillEnter()
  {
    this.places=this.placesService.getPlaces();
  }

}
