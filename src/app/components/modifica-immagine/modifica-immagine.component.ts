import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyHttpService } from 'src/app/services/my-http.service';
import { User } from 'src/app/models/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifica-immagine',
  templateUrl: './modifica-immagine.component.html',
  styleUrls: ['./modifica-immagine.component.scss']
})
export class ModificaImmagineComponent implements OnInit {

  immagini: string[]=[
    "../assets/profile/messi.jpg",
    "../assets/profile/ronaldo.jpg",
    "../assets/profile/candreva.jpg",
    "../assets/profile/nagatomo.jpg",
    "../assets/profile/allegri.jpg",
    "../assets/profile/hernandez.jpg",
    "../assets/profile/balotelli.jpg",
    "../assets/profile/buffon.jpg",
    "../assets/profile/simeone.jpg",
    "../assets/profile/ibra.jpg",
    "../assets/profile/neymar.jpg",
    "../assets/profile/mazzarri.jpg",
    "../assets/profile/mourinho.jpg",
    "../assets/profile/juve.jpg"
  ];
  
  myProfile:User;
  modificaImg: FormGroup;

  constructor(private fb: FormBuilder,private router:Router, private myHttpService: MyHttpService) { 
    this.myHttpService.getMyProfile().subscribe(reponse => {
      this.myProfile = reponse;
    });
    this.modificaImg = this.fb.group({
      immagine:['', Validators.required],
    });
    
  }

  ngOnInit(): void {
  }

  modificaImmagine(immagine:string){
    this.myProfile.immagine=immagine;
    this.myHttpService.putUser(this.myProfile).subscribe(()=>{
      this.router.navigateByUrl('profile');
    });
  }

  modificaImmagineLink(immagine){
    this.myProfile.immagine=immagine.value.immagine;
    this.myHttpService.putUser(this.myProfile).subscribe(()=>{
      this.router.navigateByUrl('profile');
    });
  }
}
