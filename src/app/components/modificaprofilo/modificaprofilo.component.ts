import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.interface';




@Component({
  selector: 'app-modificaprofilo',
  templateUrl: './modificaprofilo.component.html',
  styleUrls: ['./modificaprofilo.component.scss']
})
export class ModificaprofiloComponent implements OnInit {

  modificaprofilo: FormGroup;
  sessi=['maschio', 'femmina', 'altro'];
 
  
  get nomeControl(): FormControl{
    return this.modificaprofilo.get('nome') as FormControl;
  }
  get cognomeControl(): FormControl{
    return this.modificaprofilo.get('cognome') as FormControl;
  }
  get emailControl(): FormControl{
    return this.modificaprofilo.get('email') as FormControl;
  }
  get sessoControl(): FormControl{
    return this.modificaprofilo.get('sesso') as FormControl;
  }
  get telefonoControl(): FormControl{
    return this.modificaprofilo.get('telefono') as FormControl;
  }
  get commenti(): FormControl{
    return this.modificaprofilo.get('commenti') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.modificaprofilo = this.fb.group({
     
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      cognome: ['', Validators.required],
      sesso:['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      
    });
  }
  myProfile:User;
  ngOnInit(): void {
    this.myProfile=JSON.parse(sessionStorage.getItem('user'));
  }

  cls(){
    this.modificaprofilo.reset();
  }

  invio(){
    /*let profilo: User ={
      
      nome: this.nomeControl.value,
      cognome: this.cognomeControl.value,
      genere: this.sessoControl.value,
      email: this.emailControl.value,
      telefono: this.telefonoControl.value,
      
    };*/
    console.log(
      this.nomeControl.value,
      this.cognomeControl.value,
      this.sessoControl.value,
      this.emailControl.value,
      this.telefonoControl.value,
      
    );
    
  }


}
