import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersSubjectService {
  private subject$: Subject<Customer> | undefined;
  customersObservable$: Observable<Customer>| undefined;
  customers: Customer[] = [];
  interval: unknown;


  constructor() {
    this.subject$ = new Subject();
    this.customersObservable$ = this.subject$.asObservable();
  }
  start(){
     this.interval = setInterval( () => {
       const length = this.customers.length;
       const newCustomer = { name: "Customer " +  length, city: "City " + length};
       this.customers.push(newCustomer);
       this.subject$?.next(newCustomer);
     }  , 3000);
  }

  stop() {
    clearInterval(this.interval as number);
  }

}
