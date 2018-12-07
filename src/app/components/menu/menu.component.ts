import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  error = '';
  drinks = []

  constructor(private router: Router,
    private productservice: ProductService
  ) { }

  ngOnInit() {
    this.displayMenu()
  }

  displayMenu(): void {
    this.productservice.getProduct().subscribe(Drink => {
      this.drinks = Drink
    })
  }
}
