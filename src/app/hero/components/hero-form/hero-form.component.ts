import { Component } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {

  powers = ['Invisibility','Magic', 'Strength'];
  hero = new Hero(1, 'Dr. Salvatore', "Magic", 'Salvatore Sorrentino');

  submit(){
    console.log('sono nel submit');
  }

}
