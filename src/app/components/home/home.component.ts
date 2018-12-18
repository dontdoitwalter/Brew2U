import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/models/userModel';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  error = '';
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

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userservice: UserService,
  ) { }


  login(username, password) {
    this.authenticationService.login(username, password)
      .subscribe(
        user => {
          this.router.navigate([`/menu`]);
        },
        error => {
          this.error = error;
        });

    // let userID = localStorage.getItem('user');
    // this.userservice.getOneUser(userID)
    //   .subscribe(
    //     userObjFromserver => {
    //       this.user = userObjFromserver.user;
    //       console.log(this.user)
    //     },
    //     error => {
    //       this.error = error;
    //       console.log(this.error)
    //     });
    // this.router.navigate([`/menu`]);
  }
}
