import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Drink } from '../../models/drinkModel';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  error = '';
  drinks = []

  constructor(
    private http: HttpClient,
    // private drinks: Drink[]
  ) { }

getProduct(): Observable<Drink[]> {
  return this.http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/alldrinks`)
}

findOneProduct(id: number): Drink {
  this.http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/getdrink/${{ id }}`)
 
  console.log('this is drinks in the find  ', id)
  return this.drinks[this.getSelectedIndex(id)];
}

private getSelectedIndex(id: number) {
  for (var i = 0; i < this.drinks.length; i++) {
    if (this.drinks[i].id == id) {
      return i;
    }
  }
  return -1;
}

}
