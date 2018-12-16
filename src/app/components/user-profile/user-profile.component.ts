import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { Order } from 'src/app/models/orderModel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',

  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  error = '';
  order: Order[];
  userID = localStorage.getItem('user');

  constructor(private router: Router,
    private orderservice: OrdersService,
  ) { }

  ngOnInit() {
    this.displayOrders(this.userID);
  }

  displayOrders(userID): void {
    this.orderservice.getOrders(userID).subscribe(Order => {
      this.order = Order;
      console.log('in display orders??', this.order)
    })
  }
  
}
