import { Component, OnInit } from '@angular/core';
import { catchError, from, map, of, retry } from 'rxjs';

@Component({
  selector: 'app-prove',
  templateUrl: './prove.component.html',
  styleUrls: ['./prove.component.css']
})
export class ProveComponent implements OnInit {

  constructor() {

    const srcArray = from([1,2,'A',4,8]);
    srcArray.pipe(
      map(valore => {
        let result = valore as number * 3;
        if(Number.isNaN(result)) {
           console.log('Errore di calcolo');
           throw new Error('Errore grave di calcolo');
        }
        return result;
      }),
      retry(2)
      , catchError(error => {
        return of(0);
      })
    ).subscribe( v => console.log(v));

  }

  ngOnInit(): void {
  }

  onKeyUp(payload: string) {
   //console.log(payload.target.value);
  //const target = payload.target as HTMLInputElement;
// console.log(target.value);
console.log(payload);
  }

}
