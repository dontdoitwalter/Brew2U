import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

   // make this a model???
  username: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username == 'myloginid' && this.password == 'mypassword'){
      console.log(this.username, this.password);
     this.router.navigate(["landing"]);
    }else {
      alert("Invalid credentials!");
    }
  }

}
