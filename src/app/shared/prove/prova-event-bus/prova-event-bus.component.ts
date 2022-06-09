import { Component, OnInit } from '@angular/core';
import { ApplicationEvents } from '../../services/application-events';
import { EmitEvent } from '../../services/emit-event';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-prova-event-bus',
  templateUrl: './prova-event-bus.component.html',
  styleUrls: ['./prova-event-bus.component.css']
})
export class ProvaEventBusComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit(): void {
  }

  emit() {
     this.eventBus.emit(new EmitEvent(ApplicationEvents.AddedCustomer,
      {name: "Luigi Bianchi", city: "Rome"}));
  }

  emitDeleted() {
    this.eventBus.emit(new EmitEvent(ApplicationEvents.RemovedCustomer,
     {name: "Luigi Bianchi", city: "Rome"}));
 }


}
