import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ProductService } from '../../services/product/product.service'
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {
  error = '';
  drinks = []

  constructor(private router: Router,
    private ordersservice: OrdersService
  ) { }

  ngOnInit() {
    this.displayMenu()
  }

  displayMenu(): void {
    this.ordersservice.getProduct().subscribe(Drink => {
      this.drinks = Drink
      console.log(this.drinks)
    })
  }
}