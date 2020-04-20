import { Component, OnInit } from '@angular/core';
import { MyHttpService } from 'src/app/services/my-http.service';
import { User } from 'src/app/models/user.interface';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder,FormArray,Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private listaUtenti: LoginService,private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username:'',
      password:''
    });
  }

  ngOnInit(): void {}

  login(/*username: string, password: string*/form) {
    this.listaUtenti.eseguiLogin(/*username,password*/form);
  }
}
