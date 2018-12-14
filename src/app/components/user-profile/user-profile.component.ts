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

  constructor(private service: ProductService,
    private orderservice: OrdersService,
    private order: Order[],
    ) { }

   

  ngOnInit() {

    //this.order = this.orderservice.getOrders();
  

  }
}
  
//   this.service.getProducts().subscribe(
  //     list => {
  //       let array = list.map(item => {
  //         let userName = this.userservice.getUserName(item.payload.val()['user']); //need a username function 
  //         return {
  //           $key: item.key,
  //           userName,
  //           ...item.payload.val()
  //         };
  //       });
  //       this.listData = new MatTableDataSource(array);
  //       this.listData.sort = this.sort;
  //       this.listData.paginator = this.paginator;
  //       this.listData.filterPredicate = (data, filter) => {
  //         return this.displayedColumns.some(ele => {
  //           return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
  //         });
  //       };
  //     });
  // }

  // onSearchClear() {
  //   this.searchKey = "";
  //   this.applyFilter();
  // }

  // applyFilter() {
  //   this.listData.filter = this.searchKey.trim().toLowerCase();
