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
  @Input()
  nome:string;

  createMenu(){
    if(this.version===1 || this.version==3){
      this.menuList=[     
        { id:1, desc:"Home"},
        { id:2, desc:"List"},
        { id:3, desc:"Cards"},
        { id:4, desc:"Feedback"},
        { id:5, desc:"Profile"},
        { id:6, desc:"Exit"},
      ]
    }
    else if(this.version===2){
      this.menuList=[     
        { id:7, desc:this.nome},
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
      sessionStorage.removeItem('user');
      localStorage.removeItem('user');
      this.router.navigateByUrl('login');
    }
    else if(id===7){
      this.router.navigateByUrl('list');
    }
  }

  ricerca(s:string){
    this.router.navigateByUrl("list/"+s);
  }
}

