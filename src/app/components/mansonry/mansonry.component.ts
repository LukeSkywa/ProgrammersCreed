import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.interface';
import { SerieService } from 'src/app/services/serie.service';
import { MyHttpService } from 'src/app/services/my-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mansonry',
  templateUrl: './mansonry.component.html',
  styleUrls: ['./mansonry.component.scss']
})
export class MansonryComponent implements OnInit {

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
        //gestisco un array di 8 elementi
        this.myHttpService.getSerieFiltrata(filtro).subscribe(reponse => {
          this.serie = reponse;
        });
        this.myHttpService.get8SerieFiltrata(filtro).subscribe(reponse => {
          this.serieFiltrata = reponse;
          console.log('filtro:'+ filtro);
          console.log(this.serieFiltrata);
          if(this.serie.length<=8){
            this.mostra=null;
          }
      });
    }
    else{
      this.myHttpService.getSerieFiltrata(filtro).subscribe(reponse => {
        this.serieFiltrata = reponse;
        if(this.serie.length<=8){
          this.mostra=null;
        }
      });
    }
  }
  

  ngOnInit(): void {
    this.controllo=null;
    this.mostra=false;
    this.showList();
  }

  gestisciPreferiti(id:number){
    console.log(this.serie);
    this.serie.forEach(element => {
      if(element.id===id){
        element.preferiti=!element.preferiti;
        this.myHttpService.putSerie(element).subscribe(()=>{
          this.showList(this.controllo);
        }); 
        console.log(element);
      }
    });
  }
}
