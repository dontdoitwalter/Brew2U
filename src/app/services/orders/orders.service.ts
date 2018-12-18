import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Drink } from '../../models/drinkModel';
import { Observable } from "rxjs";
import { Order } from 'src/app/models/orderModel';
import { AllOrdersFromService } from 'src/app/admin/order-admin/order-admin.component';

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
  drink: Drink;
  constructor(
    private http: HttpClient,
  ) { }

  addorder(drinkName, price, drinkSize, drinkDescription) {
    return this.http.post<any>('https://brew2userver.herokuapp.com/drink/create',
      { drink: { drinkName, price, drinkSize, drinkDescription }}, httpOptions).subscribe();
  }

  getAllorders(): Observable<AllOrdersFromService> {
    return this.http.get<AllOrdersFromService>(`https://brew2userver.herokuapp.com/drink/alldrinks`, httpOptions)
  }

// http://localhost:3000/user/login

  getOrders(userID): Observable<Order[]> {
    return this.http.get<Order[]>(`https://brew2userver.herokuapp.com/user/${userID}/pastorders`, httpOptions)
  }




  findOneProduct(id: number): Observable<Drink[]> {
    return this.http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/getdrink/${{ id }}`, httpOptions)
    }

 }
