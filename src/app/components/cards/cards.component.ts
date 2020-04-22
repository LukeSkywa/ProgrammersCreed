import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.interface';
import { SerieService } from 'src/app/services/serie.service';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  serie: Serie[];
  mostra=false;

  constructor(private myHttpService: MyHttpService,private serieService:SerieService) { 
    
  }

  ngOnInit(): void {
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
      //console.log(this.serie);
    }, err => {
      console.log('error');
    });
    //console.log(this.serie);
  }



}
