import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { EventBusService } from '../services/event-bus.service';
import { ApplicationEvents } from '../services/application-events';
import { EmitEvent } from '../services/emit-event';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {

  constructor(private eventBus: EventBusService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(  (event: HttpEvent<unknown>) => {
        if(event instanceof HttpResponse) {
          this.eventBus.emit(new EmitEvent(
            ApplicationEvents.HttpNotification, { statusCode: 200, message: "Tutto ok"}
          ));
        }
      }),
      catchError( (error: HttpErrorResponse) => {
        this.eventBus.emit(new EmitEvent(
          ApplicationEvents.HttpNotification, { statusCode: error.status, message: "Errore"}
        ));
         return throwError(() => new Error('Errore!!!'))
      })
    );
  }
}
