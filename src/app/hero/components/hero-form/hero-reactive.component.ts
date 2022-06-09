import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter, Observable } from 'rxjs';
import { MyValidator } from '../../validators/my-validator';

@Component({
  selector: 'app-hero-reactive',
  templateUrl: './hero-reactive.component.html',
  styleUrls: ['./hero-reactive.component.css']
})
export class HeroReactiveComponent  {

  myForm : FormGroup | undefined = undefined

  // myControl = new FormControl('valore iniziale');
  myObservable: Observable<string> | undefined = undefined;


   constructor(private fb: FormBuilder){
    // this.myObservable = this.myControl.valueChanges;
   this.myForm =  fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['',  [MyValidator] ]
    });




    const x = this.myForm?.get("firstName")?.valueChanges
    .pipe(
      filter(testo => testo.length > 5),
      debounceTime(1000)
    )
    .subscribe((testo) => console.log(testo));;



//


   }

   submit(){
     console.log(this.myForm);
   }

   //change() {
    // this.myControl.setValue("Valore Cambiato");
   //}

  get nome() {return this.myForm?.get('firstName');}
  get cognome() {return this.myForm?.get('lastName');}


}
