import { Injectable } from '@angular/core';
import { House } from './House';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  // Add
  AddHouse(data: House): Observable<any> {
    let API_URL = `${this.REST_API}/add-house`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Get all objects
  GetHouses() {
    return this.httpClient.get(`${this.REST_API}`);
  }
  // Get single object
  GetHouse(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-house/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updateHouse(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-house/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // Delete
  deleteHouse(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-house/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}