import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { Router } from '@angular/router';
import { MyHttpService } from 'src/app/services/my-http.service';





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
      email: [this.myProfile.email],
      sesso:[this.myProfile.genere,],
      telefono: [this.myProfile.telefono,],
    });
    

    
  }
  constructor(private fb: FormBuilder,private router:Router, private myHttpService: MyHttpService) {}



  myProfile:User;
  

  cls(){
    this.modificaprofilo.reset();
  }

  invio(){
    let user:User=this.modificaprofilo.value;
    user.id=this.myProfile.id;
    user.username=this.myProfile.username;
    user.password=this.myProfile.password;
    this.myHttpService.putUser(user);
    this.router.navigateByUrl('profile');
  }


}
