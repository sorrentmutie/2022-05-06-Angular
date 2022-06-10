import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../models/customer';
import { ApplicationEvents } from '../services/application-events';
import { CustomersSubjectService } from '../services/customers-subject.service';
import { CustomersService } from '../services/customers.service';
import { EventBusService } from '../services/event-bus.service';
import { ToastrService } from 'ngx-toastr';
import { Toastr } from '../models/toastr';

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
      this.subscription = this.service.customersObservable$?.subscribe(
      newCustomer => this.lastCustomer = newCustomer
    );
    this.observableSubscription = this.observableService.customerAdded$
      ?.subscribe( customer => this.lastCustomer = customer);

    this.eventBusSubscription =  this.eventBus.on(
     ApplicationEvents.HttpNotification,  (data: Toastr) => {
        switch(data.statusCode) {
          case 200:
            this.toastr.success(data.message, "Ok");
            break;
          case 0:
            this.toastr.error(data.message, "Indirizzo errato");
            break;
          case 404:
            this.toastr.warning(data.message, "Servizio non disponibile");
            break;
        }
     })

   }

   ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.observableSubscription?.unsubscribe();
    this.eventBusSubscription?.unsubscribe();
   }
}

