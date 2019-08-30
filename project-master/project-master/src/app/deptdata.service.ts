import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dept } from './departmentdisplay/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptdataService {

  //url: string = "https://nodejsapidemo.herokuapp.com/users/";
  arr:Dept[]=[];
  constructor(private _http: HttpClient) {}

  // getAllUsers() {
  //   return this._http.get(this.url);
  // }
  getDeptByName(name) {
    return this._http.get(this.arr+name);
  }
  // addUser(newuser) {
  //   let head = new HttpHeaders().set("Content-Type", "application/json");
  //   let body = JSON.stringify(newuser);
  //   return this._http.post(this.url, body, { headers: head });
  // }
  editDept(newuser) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    let body = JSON.stringify(newuser);
    return this._http.put(this.arr+newuser.name,body,{ headers: head });
  }
//   deleteUser(user_email) {
//     let head = new HttpHeaders().set("Content-Type", "application/json");
//     return this._http.delete(this.url + user_email, { headers: head });
//   }
 }
