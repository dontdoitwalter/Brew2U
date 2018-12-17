import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';
import { Order } from 'src/app/models/orderModel';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/userModel';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {
  userID = localStorage.getItem('user');
  error = '';
  order: Order[];


  constructor(private router: Router,
    private orderservice: OrdersService,
    private userservice: UserService,
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

  getOneUser(userID) : void {
  this.userservice.getOneUser(userID)
      .subscribe(
        data => {
          console.log(data);
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
