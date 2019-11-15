import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  path = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(categoryId): Observable<Product[]> {
    if (categoryId == null) {
      return this.http.get<Product[]>(this.path).pipe(
        tap(data => {
          console.log(JSON.stringify(data));
        }),
        catchError(this.handleError)
      );
    } else {
      return this.http.get<Product[]>(this.path + '?categoryId=' + categoryId).pipe(
        tap(data => {
          console.log(JSON.stringify(data));
        }),
        catchError(this.handleError)
      );
    }
  }

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Token'
      })
    };
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occured .. ' + err.error.message;
    } else {
      errorMessage = 'An error occured by System ..';
    }
    return throwError(errorMessage);
  }
}
