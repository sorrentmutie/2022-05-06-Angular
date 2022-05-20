import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../product';
import { SpecialOffersService } from './special-offers.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private offers: SpecialOffersService){
    console.log('Siam passati nel costruttore');
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

  getProductsAsObservable(): Observable<Product[]> {
    return of(this.getProducts());
  }

  getProductsFromApi() : Observable<Product[]>  {
    return this.http.get<Product[]>(environment.productsApiUrl);
  }

}
