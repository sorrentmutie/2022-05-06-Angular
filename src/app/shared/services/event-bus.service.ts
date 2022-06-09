import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { ApplicationEvents } from './application-events';
import { EmitEvent } from './emit-event';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject = new Subject<any>();

emit(event: EmitEvent) {
   this.subject.next(event);
}

on(event: ApplicationEvents, action: any): Subscription {
  return this.subject
  .pipe(
    filter((e: EmitEvent) => e.name == event  ),
    map((e: EmitEvent) => e.value) )
  .subscribe(action);
}




}
