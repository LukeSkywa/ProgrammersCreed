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
  daMostrare:number;
  mostra: boolean;
  serie: Serie[] = [];
  serieFiltrata: Serie[];
  constructor(private myHttpService: MyHttpService, private serieService: SerieService) {
    this.mostra = false;
  }

  ngOnInit(): void {
    this.caricaSerie();
    //console.log(this.serie);
  }

  caricaSerie(id?:number){
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
      if(id!=null)
        this.filtra(id);
      else
        this.filtra(0);
    }, err => {
      console.log('error');
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
      }
    });
    // this.serieFiltrata = [];
    // switch (filtro) {
    //   case 0: {
    //     this.serie.forEach(item => {
    //       if (!item.nascosto) {
    //         this.serieFiltrata.push(item);
    //         console.log(item);
    //       }
    //     });
    //     break;
    //   }
    //   case 1: {
    //     this.serie.forEach(item => {
    //       if (item.preferiti) {
    //         this.serieFiltrata.push(item);
    //       }
    //     });
    //     break;
    //   }
    //   case 2: {
    //     this.serie.forEach(item => {
    //       if (item.nascosto) {
    //         this.serieFiltrata.push(item);
    //       }
    //     });
    //     break;
    //   }
    // }
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
