import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prove',
  templateUrl: './prove.component.html',
  styleUrls: ['./prove.component.css']
})
export class ProveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(payload: string) {
   //console.log(payload.target.value);
  //const target = payload.target as HTMLInputElement;
// console.log(target.value);
console.log(payload);
  }

}
