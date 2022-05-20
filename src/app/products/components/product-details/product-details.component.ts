import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  @Input() product: Product | undefined = undefined;
  @Output() productEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  back() {
    this.productEmitter.emit(this.product);
  }

}
