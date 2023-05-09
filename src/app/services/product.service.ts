import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cartAddedSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
  }

  addToCart(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart",obj);
  }

  getCartItemsByCustId(custId: number) : Observable<any[]>  {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=" + custId);
  }
   removeCartItemById(cartId: number) : Observable<any[]>  {
    return this.http.get<any[]>("http://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id=" + cartId);
  }

  makeSale(obj: any) : Observable<any> {
    debugger;
    return this.http.post<any>("http://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale",obj);
  }
}
