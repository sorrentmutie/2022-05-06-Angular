import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialOffersService {

  constructor() {
    console.log('Siam passati nel costruttore di Special Offers');
  }

  getDiscount(productId: number): number {
    return 0.10;
  }
}
