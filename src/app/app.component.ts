import { Component, HostListener } from '@angular/core';
import { AuthenticationService } from '../app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @HostListener("window:onbeforeunload",["$event"])
  // clearLocalStorage(event){
  //     localStorage.clear();
  // }

  // "window:beforeunload" 

  public title = 'brew2u';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate([`/home`]);
  }
}
