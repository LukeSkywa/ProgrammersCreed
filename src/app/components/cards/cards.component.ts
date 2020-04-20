import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/serie.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  serie: Serie[];

  constructor() { 
    
  }

  ngOnInit(): void {
  }



}
