import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList:MenuItem[]=[];
  cerca:boolean;
  @Input()
  version: number;


  createMenu(){
    if(this.version===1){
      this.menuList=[     
        { id:1, desc:"Homepage"},
        { id:2, desc:"Lista"},
        { id:3, desc:"Cards"},
        { id:4, desc:"Feedback"},
        { id:5, desc:"Profilo"},
        { id:6, desc:"Esci"},
      ]
    }
    else if(this.version===2){
      this.menuList=[     
        { id:1, desc:"←"+'NOMEITEM'},
      ];
    }
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.createMenu();
  }

  change(id:number){
    if(id===6){
      sessionStorage.removeItem('login');
      this.router.navigateByUrl('/Login');
    }
    this.router.events.subscribe(() => {
      if(id===2 || id===3)
        this.cerca=true;
      else
        this.cerca=false;
      this.createMenu();
    });
  }

}

