import { Component, Input } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  @Input() products: Product[] = [];
  selectedProduct: Product | undefined = undefined;

  showDetails(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
  }

  listen(message: Product){
    this.selectedProduct = undefined;
    console.log(message.id);
  }



}
