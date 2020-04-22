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
  daMostrare;
  mostra:boolean;
  serie: Serie[];
  serieFiltrata: Serie[];
  constructor(private myHttpService: MyHttpService,private serieService:SerieService) { 
    this.mostra=false;
  }
 
  ngOnInit(): void {
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
    }, err => {
      console.log('error');
    });
    //console.log(this.serie);
    this.serieFiltrata=this.filtra(0);
  }

  show(i:number){
    if(this.daMostrare==i){
      this.daMostrare=null;
    }
    else{
      this.daMostrare=i;
    }
  }

  filtra(filtro:number): Serie[]{
    let filtrata: Serie[];
    switch(filtro){
      case 0:{ 
      this.serie.forEach(item => {
        if(item.nascosto!=true){
          filtrata.push(item);
        }
      });
    }
      case 1: {
      this.serie.forEach(item => {
        if(item.preferiti==true){
          filtrata.push(item);
        }
      });}
      case 2:{
        this.serie.forEach(item => {
          if(item.nascosto==true){
            filtrata.push(item);
          }
      });
    }
    return filtrata;
    }
  }

}
