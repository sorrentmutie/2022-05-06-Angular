import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../models/customer';
import { ApplicationEvents } from '../services/application-events';
import { CustomersSubjectService } from '../services/customers-subject.service';
import { CustomersService } from '../services/customers.service';
import { EventBusService } from '../services/event-bus.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy {

  lastCustomer: Customer| undefined = undefined;
  data: any | undefined = undefined;

  subscription: Subscription | undefined = undefined;
  observableSubscription: Subscription | undefined = undefined;
  eventBusSubscription: Subscription | undefined = undefined;

  constructor(private service: CustomersSubjectService,
    private observableService: CustomersService,
    private eventBus: EventBusService,private toastr: ToastrService) {
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.subscription = this.service.customersObservable$?.subscribe(
      newCustomer => this.lastCustomer = newCustomer
    );
    this.observableSubscription = this.observableService.customerAdded$
      ?.subscribe( customer => this.lastCustomer = customer);

    this.eventBusSubscription =  this.eventBus.on(
     ApplicationEvents.Http200StatusCode,  (data: any) => {
        this.toastr.warning('Hello world!', 'Toastr fun!');
        this.lastCustomer = this.data = data
     })

   }

   ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.observableSubscription?.unsubscribe();
    this.eventBusSubscription?.unsubscribe();
   }
}

