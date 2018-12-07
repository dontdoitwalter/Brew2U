import { Component } from '@angular/core';
import { AuthenticationService } from '../app/services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'brew2u';
  
  constructor(
      private authenticationService: AuthenticationService
  ) { }

  logout() {
    this.authenticationService.logout()
  }
}


// login(username, password) {
//   this.authenticationService.login(username, password)
//     .subscribe(
//       data => {
//         this.router.navigate([`/menu`]);
//       },
//       error => {
//         this.error = error;
//       });

// }
