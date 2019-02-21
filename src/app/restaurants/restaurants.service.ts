import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Restaurant} from './restaurant/restaurant.model'
import { MEAT_API } from '../app.api'
import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class RestaurantsService {


//   rests: Restaurant[] = [
//   {
//     id: "bread-bakery",
//     name: "Bread & Bakery",
//     category: "Bakery",
//     deliveryEstimate: "25m",
//     rating: 4.9,
//     imagePath: "assets/img/restaurants/breadbakery.png"
//   },
//   {
//     id: "burger-house",
//     name: "Burger House",
//     category: "Hamburgers",
//     deliveryEstimate: "100m",
//     rating: 3.5,
//     imagePath: "assets/img/restaurants/burgerhouse.png"
//   }
// ]

  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]> {
    // map necessário para mapear a resposta, obtendo somente o json que vem com a resposta
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
    .catch(ErrorHandler.handleError)
  }
}
