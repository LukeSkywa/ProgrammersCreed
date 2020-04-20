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

  accesso(form/*username: string,password:string*/): boolean{
    let controllo=false;
    this.usersList.forEach(element => {
      if(element.username==form.username && element.password==form.password){
        sessionStorage.setItem('user', JSON.stringify(element));
        controllo=true;
      }
    });
    return controllo;
  }

  eseguiLogin(/*username: string,password:string*/form){
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
    this.myHttpService.postUser(form).subscribe(reponse => {
      this.getUsers();
      //console.log(this.usersList);
      this.router.navigateByUrl('/login');
    });
  }

}
