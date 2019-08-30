import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import { pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private _http: HttpClient, private _router: Router) {}
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  url = 'https://nodejsapidemo.herokuapp.com/users/';
  currentUser;
  redirectURL: string;

  getAllUsers() {
    return this._http.get(this.url);
  }
  getUserByEmail(user_email) {
    return this._http.get(this.url + user_email);
  }
  addUser(newuser) {
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(newuser);
    return this._http.post(this.url, body, { headers: head });
  }
  editUser(newuser) {
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(newuser);
    return this._http.put(this.url + newuser.user_email, body, { headers: head });
  }
  deleteUser(user_email) {
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + user_email, { headers: head });


  }
  login(user_email: string, user_password: string) {
    if (user_email === 'admin' && user_password === '1234') {
        this.currentUser = {
          user_email,
          password: user_password,
          isAdmin: true
        };
        return;
    }
    this.currentUser = {
      user_email,
      password: user_password,
      isAdmin: false
    };
  }
  logout() {
    this.currentUser = null;
    this.redirectURL = '';
    this._router.navigate(['']);
  }

}
