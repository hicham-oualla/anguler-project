import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'http://localhost:8084/api/series'; 

  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle client-side or network errors
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // Handle backend errors
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something went wrong; please try again later.');
  }
}




