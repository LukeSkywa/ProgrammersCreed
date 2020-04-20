import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
import { Serie } from 'src/app/models/serie.interface';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.scss']
})
export class ListSerieComponent implements OnInit {

  serie: Serie[];
 
  constructor(private myHttpService: MyHttpService,private serieService:SerieService) { 
    
  }
 
  ngOnInit(): void {
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
    }, err => {
      console.log('error');
    });
    //console.log(this.serie);
  }

}
