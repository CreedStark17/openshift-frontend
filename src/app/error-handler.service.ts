import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  //Deal with errors
  handleError<T>(operation?: string, result?: T): any {
    return (error: any): Observable<T> => {
      return throwError(error);
    };
  }
}
