import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  constructor(private router: Router) { }

  navigateTo(url:string){
    this.router.navigateByUrl(url);
  }

}
