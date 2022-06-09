import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Second Interceptor");
    console.log(request);
    return next.handle(request).pipe(
      tap(  (event: HttpEvent<unknown>) => {
        if(event instanceof HttpResponse) {
          console.log('event......');
          console.log(event);
        }
      }),
      catchError( (error: HttpErrorResponse) => {
         console.log('Sono in catchError');
         console.log(error);
         const data = { status: error.status, reason: "Spiegazione errore" };
       //  return throwError(() => data)
         return of();

      })
    );
  }
}
