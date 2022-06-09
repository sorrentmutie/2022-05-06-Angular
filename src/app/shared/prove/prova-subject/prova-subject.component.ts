import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../../models/customer';
import { CustomersSubjectService } from '../../services/customers-subject.service';

@Component({
  selector: 'app-prova-subject',
  templateUrl: './prova-subject.component.html',
  styleUrls: ['./prova-subject.component.css']
})
export class ProvaSubjectComponent implements OnDestroy  {

  customers: Customer[] = [];
  customersSubscription: Subscription | undefined = undefined;

  constructor(private service: CustomersSubjectService) {
    this.customersSubscription = this.service.customersObservable$?.subscribe( (newCustomer) => {
      this.customers.push(newCustomer);
    });
   }
  ngOnDestroy(): void {
    this.customersSubscription?.unsubscribe();
  }

  start() {
    this.service.start();
  }

  stop() {
    this.service.stop();
  }

}
