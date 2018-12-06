import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { User } from '../../models/userModel';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private _dbUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

//   getById(id: number) {
//     return this.http.get<User>(`${apiUrl}/users/${id}`);
// }

//   getUser() : Observable<User[]> {
//     return this._http.get<User[]>(`${this._dbUrl}/all`)
//   }
  
//   makeUser(user: User) : Observable<User[]> {
//     return this._http.post<User[]>(`${this._dbUrl}/create`, user, httpOptions)
//   }
}
