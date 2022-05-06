import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(o+)/g, '???');
  }

}
