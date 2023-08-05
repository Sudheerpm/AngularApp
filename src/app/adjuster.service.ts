import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdjusterService {
  readonly apiURL = "http://localhost:8000/";

  constructor(private http : HttpClient) { }
  
  getAdjusterList() : Observable< any[] >{
    return this.http.get<any>(this.apiURL + "adjusterassignment")
    .pipe(retry(1), catchError(this.handleError));
  }

  addAdjuster(val : any ){
    return this.http.post(this.apiURL + "adjusterassignment", val)
    .pipe(retry(1), catchError(this.handleError));
  }

  updateAdjuster(val : any ){
    return this.http.put(`${this.apiURL}adjusterassignment/${val.id}`, val)
    .pipe(retry(1), catchError(this.handleError));
  }

  deleteAdjuster(val : any ){
     return this.http.delete(this.apiURL + "adjusterassignment/"+ val)
     .pipe(retry(1), catchError(this.handleError));
  }

   // Error
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage  = this.getServerErrorMessage(error);
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}
}
