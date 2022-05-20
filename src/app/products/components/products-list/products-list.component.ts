import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  constructor(private router: Router) {}

  @Input() products: Product[] = [];
  //selectedProduct: Product | undefined = undefined;

  showDetails(selectedProduct: Product) {
   // this.selectedProduct = selectedProduct;
   this.router.navigate(['/products', selectedProduct.id])
  }

  listen(message: Product){
   // this.selectedProduct = undefined;
  //  console.log(message.id);
  }



}
