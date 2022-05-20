import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Product } from '../../product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

   product: Product | undefined = undefined;
 // @Output() productEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService) {
    // const id  = this.route.snapshot.paramMap.get('id');
    // if(id) {
    //   this.service.getProductById(id).subscribe(product => this.product = product);
    // }

   this.route.params.pipe(
      mergeMap(params => this.service.getProductById(params['id']))
   ).subscribe(product => this.product = product);

  }

  back() {
    //this.productEmitter.emit(this.product);
    this.router.navigate(["/products"]);
  }

}
