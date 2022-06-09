import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../models/customer';
import { ApplicationEvents } from '../services/application-events';
import { CustomersSubjectService } from '../services/customers-subject.service';
import { CustomersService } from '../services/customers.service';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy {

  lastCustomer: Customer| undefined = undefined;
  subscription: Subscription | undefined = undefined;
  observableSubscription: Subscription | undefined = undefined;
  eventBusSubscription: Subscription | undefined = undefined;

  constructor(private service: CustomersSubjectService,
    private observableService: CustomersService,
    private eventBus: EventBusService ) {
    this.subscription = this.service.customersObservable$?.subscribe(
      newCustomer => this.lastCustomer = newCustomer
    );
    this.observableSubscription = this.observableService.customerAdded$
      ?.subscribe( customer => this.lastCustomer = customer);

    this.eventBusSubscription =  this.eventBus.on(ApplicationEvents.RemovedCustomer,  (customer: Customer) =>  this.lastCustomer = customer )


   }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.observableSubscription?.unsubscribe();
    this.eventBusSubscription?.unsubscribe();
  }
}

