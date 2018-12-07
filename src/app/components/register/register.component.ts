import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgModel } from '@angular/forms'
import { UserService } from '../../services/user/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/userModel';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users = [];
  error = '';
  isAdmin = false; 


  // createUser = [];
  // email: string;
  // username: string;
  // password: string;
  // firstName: string;
  // lastName: string;
  // userAddress: string;
  // userSecondAddress: string;
  // userCity: string;
  // userState: string;
  // userZipcode: number;
  // phoneNumber: string;
  // isAdmin: boolean;


  constructor(private router: Router,
    private userservice: UserService,
    private http: HttpClient,
  ) { }

  ngOnInit() { 

  }

  register(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin) {
    this.userservice.register(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin)
      .subscribe(
        data => {
          this.router.navigate([`/menu`]);
        },
        error => {
          this.error = error;
        });




    // console.log(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState, userZipcode, phoneNumber, isAdmin);
  }



}





