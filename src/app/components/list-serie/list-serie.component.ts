import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
import { Serie } from 'src/app/models/serie.interface';
import { MyHttpService } from 'src/app/services/my-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.scss']
})
export class ListSerieComponent implements OnInit {
  controllo:number=0;
  sub:any;
  daMostrare;
  mostra: boolean;
  serie: Serie[] = [];
  serieFiltrata: Serie[];
  ricerca:string;

  constructor(private myHttpService: MyHttpService, private serieService: SerieService,private route: ActivatedRoute, private router: Router) {
    this.mostra = false;
  }

  ngOnInit(): void {
    //console.log(this.serie);
    this.sub = this.route.params.subscribe(params => {
      this.ricerca= params['filtro'];
      this.caricaSerie(0);
   });
  }

  caricaSerie(id?:number){
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
      if(this.ricerca)
        this.filtra(3);
      else if(id!=null)
        this.filtra(id);
    });
  }

  show(i: number) {
    if (this.daMostrare == i) {
      this.daMostrare = null;
    }
    else {
      this.daMostrare = i;
    }
  }

  
  gestisciPreferiti(id:number){
    console.log(this.serie);
    this.serie.forEach(element => {
      if(element.id===id){
        element.preferiti=!element.preferiti;
        this.myHttpService.putSerie(element).subscribe(()=>{
          if(element.preferiti && this.controllo!=2)
            this.caricaSerie(0);
          else if(this.controllo==1)
            this.caricaSerie(1);
        }); 
        console.log(element);
      }
    });
  }

  // rimuoviPreferiti(id:number){
  //   console.log(this.serie);
  //   this.serie.forEach(element => {
  //     if(element.id===id){
  //       element.preferiti=false;
  //       this.myHttpService.putSerie(element).subscribe(()=>{
  //           this.caricaSerie();
  //       });
  //       console.log(element);
  //     }
  //   });
  // }

  filtra(filtro: number) {
    this.controllo=filtro;
    this.serieFiltrata = this.serie.filter(item =>{
      switch(filtro){
        case 0: return !item.nascosto;
        case 1: return item.preferiti;
        case 2: return item.nascosto;
        case 3: return item.nome.toLowerCase().includes(this.ricerca.toLowerCase()) || item.descrizione.toLowerCase().includes(this.ricerca.toLowerCase());
      }
    });
  }

}
