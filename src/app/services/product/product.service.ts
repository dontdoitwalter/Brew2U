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
      { id: 1, drinkName: "White Chocolate Mocha", price: 5.99, drinkSize: null, espresso: null, milkOptions: null, foam: null, drinkDescription: null },
      { id: 2, drinkName: "Plain Black Coffee", price: 3.99, drinkSize: null, espresso: null, milkOptions: null, foam: null, drinkDescription: null },
      { id: 3, drinkName: "Frappucino", price: 7.99, drinkSize: null, espresso: null, milkOptions: null, foam: null, drinkDescription: null },
      { id: 4, drinkName: "Iced Coffee", price: 4.99, drinkSize: null, espresso: null, milkOptions: null, foam: null, drinkDescription: null },
      { id: 5, drinkName: "Iced Tea", price: 5.99, drinkSize: null, espresso: null, milkOptions: null, foam: null, drinkDescription: null },
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


//     findAll(): Product[] {
//       return this.products;
//   }

//   find(id: string): Product {
//       return this.products[this.getSelectedIndex(id)];
//   }

//   private getSelectedIndex(id: string) {
//       for (var i = 0; i < this.products.length; i++) {
//           if (this.products[i].id == id) {
//               return i;
//           }
//       }
//       return -1;
//   }
// }
    // getProduct() : Observable<Drink[] > {
    //   return this._http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/alldrinks`)
    // }

    // find(id: number): Drink {
    //   this._http.get<Drink[]>(`https://brew2userver.herokuapp.com/drink/getdrink/${{id}}`)
    //   // this.drinks = Drink[];
    //   console.log('this is drinks in the find  ', id, )
    //   return this.drinks[this.getSelectedIndex(id)];
    // }


  //   findAll(): Product[] {
  //     return this.products;
  // }

    // find(id: string): Drink {
    //   return this.drinks[this.getSelectedIndex(id)];
    // }

    // private getSelectedIndex(id: number) {
    //   for (var i = 0; i < this.drinks.length; i++) {
    //       if (this.drinks[i].id == id) {
    //           return i;
    //       }
    //   }
    //   return -1;
    // }
