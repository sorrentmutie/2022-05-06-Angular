import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-prova-observable-service',
  templateUrl: './prova-observable-service.component.html',
  styleUrls: ['./prova-observable-service.component.css']
})
export class ProvaObservableServiceComponent implements OnDestroy {

  subscription: Subscription | undefined = undefined;
  constructor(private observableService: CustomersService) {
    this.subscription = this.observableService.customerAdded$?.subscribe();
   }

  addCustomer() {
    this.observableService.addCustomer( {
      name: Math.random().toString(), city: "Naples"
    });
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }



}
