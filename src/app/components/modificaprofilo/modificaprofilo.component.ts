import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
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
  user: User;
  img:string;
  
  
  get nomeControl(): FormControl{
    return this.modificaprofilo.get('nome') as FormControl;
  }
  get cognomeControl(): FormControl{
    return this.modificaprofilo.get('cognome') as FormControl;
  }
  get emailControl(): FormControl{
    return this.modificaprofilo.get('email') as FormControl;
  }
  get genereControl(): FormControl{
    return this.modificaprofilo.get('genere') as FormControl;
  }
  get telefonoControl(): FormControl{
    return this.modificaprofilo.get('telefono') as FormControl;
  }
  ngOnInit(): void {    }
  
  constructor(private fb: FormBuilder,private router:Router, private myHttpService: MyHttpService) {
    this.myHttpService.getMyProfile().subscribe(reponse => {
      this.myProfile = reponse;
      this.modificaprofilo = this.fb.group({
        id: this.myProfile.id,
        nome: this.myProfile.nome,
        cognome: this.myProfile.cognome,
        username: this.myProfile.username,
        email: this.myProfile.email,
        password: this.myProfile.password,
        genere:this.myProfile.genere,
        telefono: this.myProfile.telefono,
        immagine: this.myProfile.immagine
      });
    });
  }



  myProfile:User;
  

  cls(){
    this.modificaprofilo.reset();
  }

  invio(){
    this.myHttpService.putUser(this.modificaprofilo.value).subscribe(()=>{
      this.router.navigateByUrl('profile');
    });
  }


}
