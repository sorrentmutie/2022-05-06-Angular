import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  lastCustomer: Customer | undefined;
  private customerSubject$: Subject<Customer> = new Subject();
  customerAdded$ : Observable<Customer> | undefined = undefined;

  constructor() {
    this.customerAdded$ = this.customerSubject$.asObservable();
  }

  addCustomer(customer: Customer) {
    this.lastCustomer = customer;
    this.customerSubject$.next(customer);
  }
}
