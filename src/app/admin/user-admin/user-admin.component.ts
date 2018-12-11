import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  error = '';
  users = []

  constructor(private router: Router,
    private userservice: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers()
  }

getAllUsers(): void {
  this.userservice.getUsers().subscribe(User => {
    this.users = User
    console.log(this.users)
  })
}
}
