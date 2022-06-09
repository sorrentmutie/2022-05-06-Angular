import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  token = "xxxxxxxx";

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    let clonedRequest = request.clone({
      setHeaders: {Authorization: `Bearer ${this.token}`, Accept: 'json'}
    });

   if(!clonedRequest.headers.has("Content-Type")) {
    clonedRequest = clonedRequest.clone(
       {headers: clonedRequest.headers.set('Content-Type', 'application/json')}
     );
   };

   return next.handle(clonedRequest).pipe(
     tap( (event: HttpEvent<unknown>) => {
       console.log('sono nella response del primo interceptor');
     })
   );

  }
}
