import { Component, OnInit, ViewChild } from '@angular/core';
 import { Router } from '@angular/router';
//import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProductService } from 'src/app/services/product/product.service';
//import { UserService } from 'src/app/services/user/user.service';
// import { ProductComponent } from '../product/product.component';
//import { NotificationService } from '../../services/notification.service';
import { OrdersService } from '../../services/orders/orders.service';

//import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
//import { Product } from 'src/app/models/productModel';
import { Order } from 'src/app/models/orderModel';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',

  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  error = '';
  order: Order[];

  constructor(private router: Router,
    private orderservice: OrdersService,
    ) { }

   

  ngOnInit() {

    this.displayOrders();
   
  

  }

  displayOrders(): void {
    this.orderservice.getOrders().subscribe(Order => {
      this.order = Order
      console.log(this.order)
    })
  }

}