import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'productSpecial'
})
export class ProductSpecialPipe implements PipeTransform {

  transform(value: Product): string {
    // const p: HTMLElement = new HTMLParagraphElement();
    // p.innerText = value.description;
    // return p;
    return "Description: " + value.description
  }

}
