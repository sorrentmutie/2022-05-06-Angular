import { Component } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  products: Product[] = [];
  constructor() {
    this.products = this.getProducts();
   }

  getProducts(): Product[] {
    const products: Product[] = [
      {id: 1, name: "Frigorifero",
      price: 800, description: 'classe AAA', releaseDate: new Date(), image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"},
      {id: 2, name: "Frigorifero Speciale",
      price: 1800, description: 'classe DDD', releaseDate: new Date(), image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"},
    ];
    return products;
  }

}
