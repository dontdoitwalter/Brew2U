import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/productModel';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[];

  constructor(
    private http: HttpClient
  ) {
    this.products = [
      { id: 1, drinkName: "White Chocolate Mocha", price: 5.99, drinkSize: null, drinkDescription: null },
      { id: 2, drinkName: "Plain Black Coffee", price: 3.99, drinkSize: null, drinkDescription: null },
      { id: 3, drinkName: "Frappucino", price: 7.99, drinkSize: null, drinkDescription: null },
      { id: 4, drinkName: "Iced Coffee", price: 4.99, drinkSize: null, drinkDescription: null },
      { id: 5, drinkName: "Iced Tea", price: 5.99, drinkSize: null, drinkDescription: null },
    ];
  }

  



  findAll(): Product[] {
    return this.products;
  }

  find(id: number): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}


