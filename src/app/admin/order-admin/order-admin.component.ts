import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.displayAllorders()
  }

  displayAllorders(): void {
    this.ordersservice.getAllorders().subscribe(Drink => {
      this.drinks = Drink
      console.log(this.drinks)
    })
  }
}