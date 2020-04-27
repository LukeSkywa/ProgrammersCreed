import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.interface';
import { MyHttpService } from 'src/app/services/my-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.scss']
})
export class ListSerieComponent implements OnInit {
  //ricerca
  sub:any;
  ricerca:string;

  //popUp dettaglio
  daMostrare:number;

  //filtro salvato
  controllo:number=0;

  //array con +5 item
  mostra: boolean;
  //serie totale
  serie: Serie[] = [];

  //serie totale con filtro
  serieFiltrata: Serie[];

  //serie totale lim 5
  serieFiltrataLim:Serie[];

  constructor(private myHttpService: MyHttpService,private route: ActivatedRoute, private router: Router) {
    this.mostra = false;
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.ricerca= params['filtro'];
      this.caricaSerie(0);
   });
  }

  caricaSerie(id:number){
    this.myHttpService.getSerie().subscribe(reponse => {
      this.serie = reponse;
      if(this.ricerca)
        this.filtra(3);
      else
        this.filtra(id);
      this.limitaLista();
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
          this.caricaSerie(this.controllo);
        }); 
        console.log(element);
      }
    });
  }

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
    this.limitaLista();
  }

  nascondi(id:number){
    this.serie.forEach(element => {
      if(element.id===id){
        element.nascosto=!element.nascosto;
        this.myHttpService.putSerie(element).subscribe(()=>{
            this.caricaSerie(this.controllo);
            this.daMostrare=null;
        }); 
      }
    });
  }

  limitaLista(){
    if(this.mostra==false)
      this.serieFiltrataLim=this.serieFiltrata.slice(0,5);
    else{
      this.serieFiltrataLim=this.serieFiltrata;
    }
  }

  btnTop(filtro:number){
    this.filtra(filtro);
    this.mostra=false;
    this.limitaLista();
    this.daMostrare=null;
  }

  btnBot(){
    this.mostra=!this.mostra;
    this.limitaLista();
  }

  share(){
    this.daMostrare=null;
    alert('social WIP');
  }
}
