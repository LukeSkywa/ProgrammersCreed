import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { Serie } from '../models/serie.interface';
import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/users');
  }

  getMyProfile():Observable<any>{
    return this.httpClient.get('http://localhost:3000/users/'+Number.parseInt(sessionStorage.getItem('user')));
  }

  getSerie(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/serie');
  }

  getOneSerie(id:number):Observable<any>{
    return this.httpClient.get('http://localhost:3000/serie/'+id);
  }
  
  /*getUsersUsername(author: number): Observable<HttpResponse<User[]>> {
    let genere: string=""+author;
    let params: HttpParams;
    if (genere != null) {
      params = new HttpParams().set('genere', genere);
    }
    return this.httpClient.get<User[]>('http://localhost:3000/games', { observe: 'response', params: params });
    //return this.httpClient.get<GameItem[]>('http://localhost:3000/games?genere=' + genere);
  }*/
  
  postUser(user:User){
    console.log(user);
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  putUser(user: User){
    console.log(".put(http://localhost:3000/users/"+user.id, user);
    //sessionStorage.setItem('user',JSON.stringify(user));
    return this.httpClient.put('http://localhost:3000/users/'+user.id, user);
  }

  putSerie(serie: Serie){
    return this.httpClient.put('http://localhost:3000/serie/'+serie.id, serie);
  }

  invia(url: string, body: { name: any; replyto: any; message: any; }, arg2: {
    headers: import("@angular/common/http").HttpHeaders;
  }) {
    return this.httpClient.post(url,body,arg2); 
  }

}
