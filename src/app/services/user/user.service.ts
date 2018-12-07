import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { User } from '../../models/userModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  // isAdmin: boolean;
  isAdmin: boolean = false

   
  // constructor(private http: HttpClient) { }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
}

public get currentUserValue(): User {
  return this.currentUserSubject.value;
}

  register(email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber, isAdmin) {
    return this.http.post<any>(`http://localhost:3000/user/signup`, {user: {email, username, password, firstName, lastName, userAddress, userSecondAddress, userCity, userState ,userZipcode, phoneNumber, isAdmin }})
    .pipe(map(user => {
      // SAM /////////////////// fix this
      if (user && user) {
          
          localStorage.setItem('token', user.sessiontoken);
 
      }

      return user;
  }));
}
}
