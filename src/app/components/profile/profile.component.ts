import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor() { }
  myProfile:User;
  
  ngOnInit(): void {
    this.myProfile=JSON.parse(sessionStorage.getItem('user'));
  }

  stampa(){
    console.log("ciao");
  }
}
