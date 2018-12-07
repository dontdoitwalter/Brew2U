import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { User } from '../../models/userModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

///// NEEDED??????????????????????
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  userSecondAddress: string = ''
  isAdmin: boolean = false
 

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): User {
  return this.currentUserSubject.value;
}

  register(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber, isAdmin) {
    return this.http.post<any>(`https://brew2userver.herokuapp.com/user/signup`, {user: {email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber, isAdmin }})
    // return this.http.post<any>(`http://localhost:3000/user/signup`, {user: {email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber, isAdmin }})
    .pipe(map(user => {
          if (user && user) {
          
          localStorage.setItem('token', user.sessionToken);
          console.log(user)
          console.log('are we ever here??? user service')
       }
      return user;
  }));
}
}
