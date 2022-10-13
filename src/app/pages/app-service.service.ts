import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppServiceService {

  constructor(private http: HttpClient) {
    this.getAllMenuDishes().subscribe(data => {
      console.log(data);
  });
  }


  getAllMenuDishes(): Observable<any> {
    return this.http.get('assets/json/menuDush.json');
  }

  getAllDishes(): Observable<any> {
    return this.http.get('assets/json/dish.json');
  }

  getAllOrders(): Observable<any> {
    return this.http.get('assets/json/order.json');
  }
}
