import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Drink } from '../../models/drinkModel';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

  export class ProductService {

  constructor(private _http: HttpClient) { }

  // private _dbUrl = "http://localhost:3000"
  // private _dbUrl = "https://brew2userver.herokuapp.com"

    getProduct() : Observable<Drink[] > {
      return this._http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/alldrinks`)
    }
}
