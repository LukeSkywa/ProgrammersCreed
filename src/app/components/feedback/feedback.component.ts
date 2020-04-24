import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Feedback } from 'src/app/models/feedback';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MyHttpService } from 'src/app/services/my-http.service';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  
  inviato:boolean;

  ngOnInit(): void {
  }
 

  sessi=['maschio', 'femmina', 'altro'];

  
  feedbackForm: FormGroup;

 
  
  get nomeControl(): FormControl{
    return this.feedbackForm.get('nome') as FormControl;
  }
  get cognomeControl(): FormControl{
    return this.feedbackForm.get('cognome') as FormControl;
  }
  get emailControl(): FormControl{
    return this.feedbackForm.get('email') as FormControl;
  }
  get sessoControl(): FormControl{
    return this.feedbackForm.get('sesso') as FormControl;
  }
  get telefonoControl(): FormControl{
    return this.feedbackForm.get('telefono') as FormControl;
  }
  get commentiControl(): FormControl{
    return this.feedbackForm.get('commenti') as FormControl;
  }

  constructor(private fb: FormBuilder, private http: MyHttpService) {
    this.inviato=false;
    this.feedbackForm = this.fb.group({
     
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      cognome: ['', Validators.required],
      sesso:['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      commenti: ['', Validators.required],
    });
  }

  cls(){
    this.feedbackForm.reset();
  }

  invio(){

     this.inviato=true;
      
      const email = this.feedbackForm.value;
      console.log(email);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.invia('https://formspree.io/meqlyvwd',
        { name: email.nome, replyto: email.email, message: email.commenti },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response+" risposta");
          }
        );
    
    
  }

}
