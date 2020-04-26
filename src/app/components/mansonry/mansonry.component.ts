import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.interface';
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

  constructor(private myHttpService: MyHttpService,private route: ActivatedRoute, private router: Router) {
  }

  showList(filtro?:string,limite?:number){
        if(this.ricerca)
          this.myHttpService.ricerca(filtro).subscribe(reponse => {
            this.serieFiltrata = reponse;
            this.mostra=null;
          });
        else{
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
  }
  

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.ricerca= params['filtro'];
      if(this.ricerca)
        this.showList(this.ricerca,8);
      else
        this.showList(null,8);
   });
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
    this.controllo=filter;
    this.mostra=false;
    this.showList(filter,limit);
  }

  btnBot(){
    if(this.mostra)
      this.showList(this.controllo,8);
    else
      this.showList(this.controllo);
    
    this.mostra=!this.mostra;
  }

  share(){
    alert('social WIP');
  }

}
