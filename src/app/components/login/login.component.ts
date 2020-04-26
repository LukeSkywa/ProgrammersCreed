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
  show: boolean;

  constructor(private loginService: LoginService,private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
      salva: [],
    });
    this.show = false;
  }

  ngOnInit(): void {}

  login() {
    this.loginService.eseguiLogin(this.loginForm.value);
  }

  password() {
    this.show = !this.show;
    console.log(this.show);
  }

}
