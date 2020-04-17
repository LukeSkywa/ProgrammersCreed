import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  view: boolean=false;
  menuList:MenuItem[]=[];
  cerca=false;

  changeEditItem(){
    if(sessionStorage.getItem('dettaglio')){
      this.menuList=[     
        { id:1, desc:"←"},
        { id:2, desc:sessionStorage.getItem('nomeItem')},
      ];
      this.view=true;
    }
    else if(sessionStorage.getItem('login')){
      this.menuList=[     
        { id:1, desc:"Homepage"},
        { id:2, desc:"Lista"},
        { id:3, desc:"Cards"},
        { id:4, desc:"Feedback"},
        { id:5, desc:"Profilo"},
        { id:6, desc:"Esci"},
      ]
      this.view=true;
    }

  }

  constructor(private router: Router) {
    this.changeEditItem();
  }

  ngOnInit(): void {
  }

  change(id:number){
    this.cerca=false;
    if(id===6){
      sessionStorage.removeItem('login');
      this.router.navigateByUrl('/Login');
      this.view=false;
    }
    else if(id===2 || id===3)
      this.cerca=true;

    this.router.events.subscribe(() => {
      this.changeEditItem();
    });

  }

}

