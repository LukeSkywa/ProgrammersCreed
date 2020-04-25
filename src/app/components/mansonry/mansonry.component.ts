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
  mostra: boolean=false;
  serie: Serie[] = [];
  serieFiltrata: Serie[];
  ricerca:string;
  lunghezza:number;

  constructor(private myHttpService: MyHttpService, private serieService: SerieService,private route: ActivatedRoute, private router: Router) {
  }

  showList(filtro?:string,limite?:number){
    this.controllo=filtro;
        //gestisco un array di 8 elementi
        this.myHttpService.getSerieFiltrata(filtro).subscribe(reponse => {
          this.serie = reponse;
        });

        this.myHttpService.getSerieFiltrata(filtro,limite).subscribe(reponse => {
          this.serieFiltrata = reponse;
          if(this.serie.length<=8){
            this.mostra=null;
          }
      });

  }
  

  ngOnInit(): void {
    this.showList();
  }

  preferiti(id:number){
    this.serie.forEach(element => {
      if(element.id===id){
        element.preferiti=!element.preferiti;
        this.myHttpService.putSerie(element).subscribe(()=>{
          this.showList(this.controllo);
        }); 
      }
    });
  }

  btnTop(filter:string, limit:number){
    this.mostra=false;
    this.controllo=filter;
    this.showList(filter,limit);
  }

  btnBot(){
    if(this.mostra)
      this.showList(this.controllo,8);
    else
      this.showList(this.controllo);
    
    this.mostra=!this.mostra;
  }


}
