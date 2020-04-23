import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';
import { Serie } from 'src/app/models/serie.interface';
import { MyHttpService } from 'src/app/services/my-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.scss']
})
export class ListSerieComponent implements OnInit {
  daMostrare:number;
  sub:any;
  //daMostrare;
  mostra: boolean;
  serie: Serie[] = [];
  serieFiltrata: Serie[];
  ricerca:string;
  constructor(private myHttpService: MyHttpService, private serieService: SerieService,private route: ActivatedRoute) {
    this.mostra = false;
  }

  ngOnInit(): void {
    //console.log(this.serie);
    this.sub = this.route.params.subscribe(params => {
      this.ricerca= params['filtro'];
      this.caricaSerie();
   });
  }

  caricaSerie(id?:number){
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
      if(id!=null)
        this.filtra(id);
      else if(this.ricerca){
        this.filtra(3);
        console.log(this.ricerca)
      }
      else
        this.filtra(0);
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
          if(element.preferiti)
            this.caricaSerie();
          else
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
    this.serieFiltrata = this.serie.filter(item =>{
      switch(filtro){
        case 0: return !item.nascosto;
        case 1: return item.preferiti;
        case 2: return item.nascosto;
        case 3: return item.nome.toLowerCase().includes(this.ricerca.toLowerCase()) || item.descrizione.toLowerCase().includes(this.ricerca.toLowerCase());
      }
    });
    console.log(this.serieFiltrata);
  }

  nascondi(id:number){
    this.serie.forEach(element => {
      if(element.id===id){
        element.nascosto=!element.nascosto;
        this.myHttpService.putSerie(element).subscribe(()=>{
            this.caricaSerie();
        }); 
        console.log(element);
      }
    });
  }
}
