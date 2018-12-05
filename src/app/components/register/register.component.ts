import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
createUser = [];
users = [];


  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  userAddress: string;
  userSecondAddress: string;
  userCity: string;
  userState: string;
  userZipcode: number;
  phoneNumber: string;
  isAdmin: boolean;


  constructor(private router: Router, private userservice: UserService, private http: HttpClient) { }

  // ngOnInit() {}

    ngOnInit(): void {
         this.http.get('http://localhost:3000/info/1').subscribe(data => {
        console.log(data);
    })
  };


  register() : void {
  console.log(this.email, this.phoneNumber);
  }
  
}