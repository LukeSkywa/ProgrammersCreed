import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.interface';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  serie : Serie[];

  constructor(private myHttpService: MyHttpService) { 
    this.getSerieDb();
  }

  getSerieDb(){
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
    }, err => {
      console.log('error');
    });
  }

  getSerie(){
    return this.serie;
  }
}
