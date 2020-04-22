import { Injectable } from '@angular/core';
import { Serie } from '../models/serie.interface';
import { MyHttpService } from './my-http.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  serie : Serie[];

  constructor(private myHttpService: MyHttpService) { 
    
  }

}
