import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient, HttpErrorResponse} from '@angular/common/http';
// import { environment} from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  placeOrders(data): Observable<any>{
    return this.http.post('http://localhost:3000/order-food',data)
    .pipe(catchError(this.handleError))

  }

  handleError(errorObj:HttpErrorResponse){
    return throwError(errorObj)
  }
}
