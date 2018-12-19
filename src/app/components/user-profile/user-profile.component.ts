import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { User } from '../../models/userModel';
import { UserService } from '../../services/user/user.service';
import { Order } from '../../models/orderModel';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',

  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

   user: User = {
    id: 0,
    email: "",
    password: "",
    username: "",
    userAddress: "",
    userSecondAddress: "",
    userState: "",
    userCity: "",
    userZipcode: 0,
    phoneNumber: "",
    firstName: "",
    lastName: "",
    isAdmin: false,
    drink: [],
  };

  Order: Order = {
    drinks: [],
    id: 0,
    email: '',
    password: '',
    username: '',
    userAddress: '',
    userSecondAddress: '',
    userState: '',
    userCity: '',
    userZipcode: 0,
    phoneNumber: '',
    firstName: '',
    lastName: '',
    isAdmin: false,
  };
  
  error = '';
  orders = [];
  userID = localStorage.getItem('user');

  constructor(private router: Router,
    private orderservice: OrdersService,
    private userservice: UserService,
  ) { }

  ngOnInit() {
    this.userID = localStorage.getItem('user');
    this.getUserOrders(this.userID);
    this.getUserInfo(this.userID);
  }

  getUserOrders(userID) {
    this.orderservice.getOrders(userID).subscribe(ordersObjFromServer => {
      this.orders = ordersObjFromServer;
      console.log(this.orders)
    },
      error => {
        this.error = error;
        console.log(this.error)
      });
  }

  getUserInfo(userID) {
    this.userservice.getOneUser(userID)
      .subscribe(
        userObjFromserver => {
          this.user = userObjFromserver.user;
          console.log(this.user)
        },
        error => {
          this.error = error;
          console.log(this.error)
        });
  }
}
