import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { Order } from 'src/app/models/orderModel';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/userModel';
import { Drink } from '../../models/drinkModel';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
  userID = localStorage.getItem('user');
  error = '';
orders = [];

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

  order: Order = {
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
  
  // user: User = {
  //   id: 0,
  //   email: "",
  //   password: "",
  //   username: "",
  //   userAddress: "",
  //   userSecondAddress: "",
  //   userState: "",
  //   userCity: "",
  //   userZipcode: 0,
  //   phoneNumber: "",
  //   firstName: "",
  //   lastName: "",
  //   isAdmin: false,
  //   drink: [],
  // };

  constructor(private router: Router,
    private orderservice: OrdersService,
    private userservice: UserService,
  ) { }

  ngOnInit() {
   this.getOneUser(this.userID);
    // this.displayOrders(this.userID);
  }

  // displayOrders(userID): void {
  //   this.orderservice.getOrders(userID).subscribe(Orders => {
  //     this.orders = Orders;
  //     console.log('in display orders??', this.orders)
  //   })
  // }

  getOneUser(userID) : void {
  this.userservice.getOneUser(userID)
      .subscribe(
        userObjFromserver => {
          this.user = userObjFromserver.user;
          console.log(this.user)
                // user => {
        //   user = user.user 
        //   console.log(user);
          // this.router.navigate([`/menu`]);
        },
        error => {
          this.error = error;
        });
      }
  
// updateUser(email, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber) {
  // console.log(email, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber);
// then go to profile page. 

updateUser() {
  console.log('hello')
}


}
