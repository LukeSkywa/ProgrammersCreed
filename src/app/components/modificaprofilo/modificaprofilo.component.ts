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
  ngOnInit(): void {
    this.myProfile=JSON.parse(sessionStorage.getItem('user'));
    this.modificaprofilo = this.fb.group({
     
      nome: [this.myProfile.nome,],
      cognome: [this.myProfile.cognome, ],
      email: [{value: this.myProfile.email, disabled: true }],
      sesso:[this.myProfile.genere,],
      telefono: [this.myProfile.telefono,],
    });
    

    
  }
  constructor(private fb: FormBuilder) {}



  myProfile:User;
  

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

  modify():boolean{
    let modify:boolean=false;
    const nome=this.nomeControl.value;
    const cognome=this.cognomeControl.value;
    const sesso=this.sessoControl.value;
    const email=this.emailControl.value;
    const telefono=this.telefonoControl.value;

    if(nome!=this.myProfile.nome){
      this.myProfile.nome=nome;
      modify=true;
    }
    if(cognome!=this.myProfile.cognome){
      this.myProfile.cognome=cognome;
      modify=true;
    }
    if(email!=this.myProfile.email){
      this.myProfile.email=email;
      modify=true;
    }
    if(telefono!=this.myProfile.telefono){
      this.myProfile.telefono=telefono;
      modify=true;
    }
    if(sesso!=this.myProfile.genere){
      this.myProfile.genere=sesso;
      modify=true;
    }
      

   
    return modify;

  }


}
