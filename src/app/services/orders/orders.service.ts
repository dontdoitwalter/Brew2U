import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Drink } from '../../models/drinkModel';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Order } from 'src/app/models/orderModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `${localStorage.token}`,
  })
};


@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  error = '';
  drinks = [];
  order = []

  constructor(
    private http: HttpClient,
    // private drinks: Drink[]
  ) { }

  getAllorders(): Observable<Drink[]> {
    return this.http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/alldrinks`, httpOptions)
  }


getOrders(userID) : Observable<Order[] > {
   return this.http.get<Order[]>(`https://brew2userver.herokuapp.com/user/${userID}/pastorders`, httpOptions)
 }

  findOneProduct(id: number): Drink {
    this.http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/getdrink/${{ id }}`, httpOptions)

    console.log('this is drinks in the find  ', id)
    return this.drinks[this.getSelectedIndex(id)];
  }

  addorder() : Observable<Drink[]> {
    return this.http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/alldrinks`, httpOptions)
  }
   
  
  // (drinkName, price, drinkSize, drinkDescription) {
  //   return this.http.post<any>(`https://brew2userver.herokuapp.com/drink/create`,
  //     { drink: { drinkName, price, drinkSize, drinkDescription } }, httpOptions);
  // }

  // {    "drink": {   "drinkName": "cvxcLatte", "price": "9.xcvcx50", "drinksize": "smaxcvcxvll",
  // "drinkDescription": "Really $$$ coffee"}
  // }

  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.drinks.length; i++) {
      if (this.drinks[i].id == id) {
        return i;
      }
    }
    return -1;
  }

}
