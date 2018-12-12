import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/userModel'
import { ProductService } from '../../services/product/product.service';
import { UserService } from '../../services/user/user.service';
import { AlluserService } from '../../services/alluser.service';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  error = '';
  users = []

  constructor(private router: Router,
    private alluserservice: AlluserService
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }


  // NEED GET ALL USERS TO DO THIS
getAllUsers(): void {
  this.alluserservice.getUsers().subscribe(User => {
    this.users = User
    console.log(this.users)
  })
}
}
