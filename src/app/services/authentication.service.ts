import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/userModel';
import { Token } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:3000/user/login`, {user: {username, password }})
    .pipe(map(user => {
      // SAM /////////////////// fix this
      if (user && user) {
          
          localStorage.setItem('token', user.sessiontoken);
          // this.currentUserSubject.next(user);
      }

      return user;
  }));
}
          
   
logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('token');
  // this.currentUserSubject.next(null);
}
}


  // constructor(private _http: HttpClient) {
  //   this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  //   this.currentUser = this.currentUserSubject.asObservable();
  // }

  // public get currentUserValue(): User {
  //   return this.currentUserSubject.value;
  // }

  // login(password: string, username: string) {
  // return this.http.post<any>(`http://localhost:3000/user/login`, { password, username })

  // login(password, username) {
  //   let loginObj = `{
  //   "user": {
  //     "password": "${password}",
  //     "username": "${username}"
  //   }
  //   }`
  //   console.log(loginObj);
  //   return this._http.post<any>(`http://localhost:3000/user/login`, loginObj)
  //     .pipe(map(user => {
  //       // login successful if there's a jwt token in the response
  //       if (user && user.token) {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.currentUserSubject.next(user);
  //       }
  //       return user;
  //     }));
  // }

  // login(password: string, username: string) {
  // return this.http.post<any>(`http://localhost:3000/user/login`, { password, username })


  // getOne(id) {
  //   console.log('auth file ', id)
  //   return this._http.get<any>(`http://localhost:3000/user/info/`, id );
    
  // }

  
  // logout() {
  //   localStorage.removeItem('currentUser');
  // }
