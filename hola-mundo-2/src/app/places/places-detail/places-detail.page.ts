import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { places } from '../places.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit {
  //Definimos la variable "miplace" que contendrá el lugar que ha pulsado el usuario:
  // se pone como tipo "place" y debe inicializarse:
  miplace: places = { id: '', title: '', comments: [] };
  texto_nocomentarios: string = "ALONSO PUTERO, alonso putero ..."
  //En el constructor ponemos todas las variables instanciables, una para acceder a la clase ActivatedRoute y otra
  // para acceder a la clase de nuestro servicio "PlacesService"
  constructor(private _activatedRoute: ActivatedRoute,
    private _placesService: PlacesService,
    private _router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placesID');
      this.miplace = this._placesService.getPlace(recipeId!);
      this.texto_nocomentarios;
      //Llamamos al servicio que devuelve el lugar seleccionado pasándole el id como parámetro de entrada

    })
  }
  /**
   * deletePlace() --> Borrar un elemento del json
   */
  async deletePlace() {
    const element = await this.alertCtrl.create(
      {
        header: 'Seguro que quieres borrar esta foto?',
        message: 'Cuidado!!!!!!! aaaah!!!',
        buttons:
          [
            {
              text: 'Cancelar',
              role: 'cancel'
            },
            {
              text: 'Borrar',
              handler: () => {
                this._placesService.deletePlace(this.miplace.id)
                alert("Eliminado");
                // redireccion a places:
                this._router.navigate(['/places']);
              }
            }
          ]
      }

    );
    await element.present();
  }
}
