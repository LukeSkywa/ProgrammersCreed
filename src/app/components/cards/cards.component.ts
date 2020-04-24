import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.interface';
import { SerieService } from 'src/app/services/serie.service';
import { MyHttpService } from 'src/app/services/my-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  daMostrare:number;
  controllo:string=null;
  sub:any;
  //daMostrare;
  mostra: boolean;
  serie: Serie[] = [];
  serieFiltrata: Serie[];
  ricerca:string;
  lunghezza:number;

  constructor(private myHttpService: MyHttpService, private serieService: SerieService,private route: ActivatedRoute, private router: Router) {
  }

  showList(filtro?:string){
    this.controllo=filtro;
    if(!this.mostra){
        this.myHttpService.get8Serie().subscribe(reponse => {
          this.serieFiltrata = reponse;
          if(this.serieFiltrata.length<8)
            this.mostra=null;
      });
    }
    else{
      if(filtro)
      this.myHttpService.getSerieFiltrata(filtro).subscribe(reponse => {
        this.serieFiltrata = reponse;
        if(this.serieFiltrata.length<8)
          this.mostra=null;
      });
      else{
        this.myHttpService.getSerie().subscribe(reponse => {
          this.serieFiltrata = reponse;
          if(this.serieFiltrata.length<8)
            this.mostra=null;
      });
      }
    }
  }
  

  ngOnInit(): void {
    this.mostra=false;
    this.showList();
  }

  gestisciPreferiti(id:number){
    console.log(this.serie);
    this.serie.forEach(element => {
      if(element.id===id){
        element.preferiti=!element.preferiti;
        this.myHttpService.putSerie(element).subscribe(()=>{
        }); 
        console.log(element);
      }
    });
  }
}
