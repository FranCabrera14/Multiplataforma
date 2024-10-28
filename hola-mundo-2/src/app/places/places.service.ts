import { Injectable } from '@angular/core';
import { places } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private  places: places[] = [
    {
    id: '1',
    title: "JODEEEEEEEEEEEEEEEEEER",
    imageURL: 'data:image/jpeg;base64,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',
    comments: ['Mis amigos me odian y traicionan a mi espalda', 'y todo por quererlos']
    },
    {
      id: '2',
    title: "POR QUE COÑO NO FUNCIONA",
    imageURL: 'https://media.vacalia.com/poi/reformat/1920/1080/poi_1454_db2c7cfb8481c7af287d8992515c8426.webp?v=21092023',
    comments: ['Siento haberos dado todo mi amor.', 'hasta nunca amigos']
    },
    {
      id: '3',
    title: "POR FIN FUNCIONA ",
    imageURL: 'https://www.mediateletipos.net/wp-content/images/2014/05/117467_Alonso_Pinder_Marsh.jpg',
    comments: []
    }
  ]

  constructor() {}
  /**
   * getPlaces: recupera un listado de ciudades
   * @returns Array de objetos de ciudades
   */
    getPlaces() {
      return [...this.places]
    }
    /**
     * getPlace Recupera una única ciudad por parametro
     * @param placeID recibe un string del valor id de la ciudad
     * @returns Devuelve un objeto ciudad
     */
    getPlace(placeID: string |undefined) : places {
      return {
        ...this.places.find (
          place => {
            return place.id===placeID
          }
        )
      }

    }

    /**
     * addPlace: Añade una ciudad nueva al listado de ciudades existente 
     * @param title (titulo del objeto de nueva cidudad a crear)
     * @param imageURL (Imagen del objeto de nueva ciudad a crear)
     */
    addPlace(title: string | undefined, imageURL: string | undefined){
      this.places.push({
        title,
        imageURL,
        comments: [],
        id: (this.places.length+1).toString()
      });
    }
    /**
     * deletePlace: Borra una ciudad localizada a través de su identificador
     * @param placeID (Identificador de la ciudad a borrar)
     */
    deletePlace(placeID : string | undefined) {
      this.places=this.places.filter(place => {
        return place.id != placeID
      })

    }

   
}
