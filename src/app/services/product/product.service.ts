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
      { id: 1, drinkName: "White Chocolate Mocha", price: 3.99, drinkSize: "small", drinkDescription: "Chocolate/Coffee Goodness" },
      { id: 2, drinkName: "White Chocolate Mocha", price: 4.99, drinkSize: "medium", drinkDescription: "Chocolate/Coffee Goodness" },
      { id: 3, drinkName: "White Chocolate Mocha", price: 5.99, drinkSize: "large", drinkDescription: "Chocolate/Coffee Goodness" },
      { id: 4, drinkName: "Plain Black Coffee", price: 2.49, drinkSize: "small", drinkDescription: "Black like coal" },
      { id: 5, drinkName: "Plain Black Coffee", price: 2.99, drinkSize: "medium", drinkDescription: "Black like coal" },
      { id: 6, drinkName: "Plain Black Coffee", price: 3.49, drinkSize: "large", drinkDescription: "Black like coal" },
      { id: 7, drinkName: "Frappucino", price: 5.99, drinkSize: "small", drinkDescription: "I don't knw what this is" },
      { id: 8, drinkName: "Frappucino", price: 6.99, drinkSize: "medium", drinkDescription: "I don't knw what this is" },
      { id: 9, drinkName: "Frappucino", price: 7.99, drinkSize: "large", drinkDescription: "I don't knw what this is" },
      { id: 10, drinkName: "Iced Coffee", price: 4.99, drinkSize: "small", drinkDescription: "Iced Coffee" },
      { id: 11, drinkName: "Iced Coffee", price: 5.99, drinkSize: "medium", drinkDescription: "Iced Coffee" },
      { id: 12, drinkName: "Iced Coffee", price: 6.99, drinkSize: "large", drinkDescription: "Iced Coffee" },
      { id: 13, drinkName: "Iced Tea", price: 2.99, drinkSize: "small", drinkDescription: "Iced Tea" },
      { id: 14, drinkName: "Iced Tea", price: 3.99, drinkSize: "medium", drinkDescription: "Iced Tea" },
      { id: 15, drinkName: "Iced Tea", price: 4.99, drinkSize: "large", drinkDescription: "Iced Tea" },
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
