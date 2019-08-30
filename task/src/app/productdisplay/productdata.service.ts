import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  url: string =  endpoints.url + 'products/';
  constructor(private _http: HttpClient) {}

  getAllProducts() {
    return this._http.get(this.url);
  }
  getProductById(pro_id) {
    return this._http.get(this.url + pro_id);
  }
  addProduct(item) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url, body, { headers: head });
  }
  editProduct(pro_id, item) {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + pro_id, body, { headers: head });
  }
  deleteProduct(pro_id) {
    const head = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + pro_id, { headers: head });
  }
}
