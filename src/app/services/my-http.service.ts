import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { Serie } from '../models/serie.interface';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  idUtente:string='';

  constructor(private httpClient: HttpClient) {
    if(sessionStorage.getItem('user'))
      this.idUtente=sessionStorage.getItem('user');
    else if(localStorage.getItem('user'))
      this.idUtente=localStorage.getItem('user');
    console.log("porcodio id: "+this.idUtente);
   }

  getUsers(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/users');
  }

  getMyProfile():Observable<any>{    
    return this.httpClient.get("http://localhost:3000/users/"+this.idUtente);
  }

  get8Serie(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/users/'+this.idUtente+'/serie?_page=1&_limit=8');
  }

  getSerie(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/users/'+this.idUtente+'/serie');
  }

  getSerieDefault(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/serie');
  }

  getSerieFiltrata(filtro?:string, limit?:number):Observable<any>{
    let s:string='http://localhost:3000/users/'+this.idUtente+'/serie?';
    if(filtro)
      s+=filtro+'=true';
    else
      s+='nascosto=false';
    if(limit)
      s+='&_page=1&_limit='+limit;
    return this.httpClient.get(s);
  }

  getOneSerie(id:number):Observable<any>{
    return this.httpClient.get('http://localhost:3000/users/'+this.idUtente+'/serie/'+id);
  }
  
  postUser(user:User){
    console.log(user);
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  putUser(user: User){
    return this.httpClient.put('http://localhost:3000/users/'+user.id, user);
  }

  putSerie(serie: Serie){
    return this.httpClient.post('http://localhost:3000/users/'+this.idUtente+'/serie/'+serie.id, serie);
  }

  invia(url: string, body: { name: any; replyto: any; message: any; }, arg2: {
    headers: import("@angular/common/http").HttpHeaders;
  }) {
    return this.httpClient.post(url,body,arg2); 
  }

}
