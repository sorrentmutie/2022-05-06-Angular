import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor() {
    this.invoca(1);
  }

  invoca(callback: unknown) {
    if(typeof(callback) === 'function'){
      callback();
    }
  }


}
