import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.css']
})
export class ProductTestComponent implements OnInit, OnDestroy, OnChanges {

  @Input() value: number = 0;
  @Input() value2: number = 0;
  square: number = 0;

  constructor() {
    const myObservable = of(1,2,3,4,5,6,7,8,9,10);
    const myObserver = {
      next: (valore: number) => console.log("Valore:" + valore ),
      error: (errore: Error) => console.log(errore),
      complete: ()  => console.log('fine trasmissione')
    };
    myObservable.subscribe(myObserver);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const nuovoValore = changes['value']['currentValue'];
    this.square = nuovoValore * nuovoValore;
  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }


}
