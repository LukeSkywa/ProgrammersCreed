import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  show: boolean;
  
  constructor(private loginService: LoginService,private fb: FormBuilder) { 
    this.registerForm = this.fb.group({
      username:'',
      password:''
    });
    this.show = false;
  }

  ngOnInit(): void {
  }

  register(form){
    this.loginService.addUser(form);
  }

  password() {
    this.show = !this.show;
    console.log(this.show);
  }
}
