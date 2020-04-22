import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import { Serie } from '../models/serie.interface';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/users');
  }
  getSerie(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/serie');
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

  modifyUser(user: User){
    return this.httpClient.put('http://localhost:3000/users/'+sessionStorage.getItem('id'), user);
  }

  putSerie(serie: Serie){
    return this.httpClient.put('http://localhost:3000/serie/'+serie.id, serie);
  }

}
