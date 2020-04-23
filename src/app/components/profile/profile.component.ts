import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { MyHttpService } from 'src/app/services/my-http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private myHttpService: MyHttpService) { }
  myProfile:User;
  
  ngOnInit(): void {
    this.myHttpService.getMyProfile().subscribe(reponse => {
      this.myProfile = reponse;
      console.log(this.myProfile);
    }, err => {
      console.log('error');
    });
  }

  stampa(){
    console.log("ciao");
  }
}
