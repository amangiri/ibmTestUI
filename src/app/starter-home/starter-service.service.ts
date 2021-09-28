import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient, HttpErrorResponse} from '@angular/common/http';
// import { environment} from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import {catchError,map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StarterServiceService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any>{
    return this.http.get('http://localhost:3000/get-orders')
    .pipe(catchError(this.handleError))

  }

  getCompletedOrders(): Observable<any>{
    return this.http.get('http://localhost:3000/get-completed-orders')
    .pipe(catchError(this.handleError))

  }

  handleError(errorObj:HttpErrorResponse){
    return throwError(errorObj)
  }
}
