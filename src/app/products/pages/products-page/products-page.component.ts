import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnDestroy {

  constructor(private productsService: ProductsService){
   // this.specialOfferProducts = this.productsService.getProducts()
   this.subscription =  this.productsService.getProductsFromApi().subscribe( prodotti => {
      this.specialOfferProducts = prodotti;
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

subscription: Subscription | undefined = undefined;
specialOfferProducts: Product[] = [];
value: number = 0;
value2: number = 0;

changeValue(){
  this.value +=1;
  this.value2+= 5;
}


}
