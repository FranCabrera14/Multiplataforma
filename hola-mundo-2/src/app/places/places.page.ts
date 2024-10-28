import { Component, OnInit } from '@angular/core';
import {PlacesService} from './places.service';
import {  places } from "./places.model";
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage  {

titulo: string = "Mi enemigo se llama Cristian"

  public places : places[] = [];
  constructor(private placesService: PlacesService,
    private router: Router
  ) {

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
  /**
   * Inserta un nuevo elemento en el json
   */
  newPlace()
  {
    alert("New Page")
    this.router.navigate(['/places/place-add'])
  }
  /**
   * va a la pagina de inicio por defecto
   */
  goToHome(){
    this.router.navigate(['home'])
  }
}
