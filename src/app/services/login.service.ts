import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { MyHttpService } from './my-http.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usersList: User[];
  
  constructor(private router:Router,private myHttpService: MyHttpService) { 
    this.getUsers();
  }

  accesso(form): boolean{
    let controllo=false;
    this.usersList.forEach(element => {
      if(element.username==form.username && element.password==form.password){
        if(form.salva)
          localStorage.setItem('user', JSON.stringify(element.id));
        else
          sessionStorage.setItem('user', JSON.stringify(element.id));
          
        controllo=true;
      }
    });
    return controllo;
  }

  eseguiLogin(form){
    if (this.accesso(form)) {
      this.router.navigateByUrl('/home');
    }
    else{
      window.alert("utente non trovato")
      this.router.navigateByUrl('/login');
    }
  }

  getUsers(){
    this.myHttpService.getUsers().subscribe(reponse => {
      this.usersList = reponse;
    }, err => {
      console.log('error');
    });
  }

  addUser(form){
    if(form.immagine==null){
      form.immagine="../assets/profile/messi.jpg"
    }
    this.myHttpService.postUser(form).subscribe(reponse => {
      this.getUsers();
      this.router.navigateByUrl('/login');
    });
  }

}
