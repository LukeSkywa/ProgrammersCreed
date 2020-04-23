import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie.interface';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {
  id:number;
  sub: any;
  serie:Serie;
  constructor(private route: ActivatedRoute,private myHttpService: MyHttpService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });
   this.myHttpService.getOneSerie(this.id).subscribe(reponse => {
    this.serie = reponse;
  }, err => {
    console.log('error');
  });
  }

  social(){
    window.alert('social da implementare');
  }


}
