import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Feedback } from 'src/app/models/feedback';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  http: any;
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
  get commenti(): FormControl{
    return this.feedbackForm.get('commenti') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
     
      nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      cognome: ['', Validators.required],
      sesso:['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      commenti: ['',],
    });
  }

  cls(){
    this.feedbackForm.reset();
  }

  invio(feedbackForm){
    let feedback : Feedback={
      
      nome: this.nomeControl.value,
      cognome: this.cognomeControl.value,
      sesso: this.sessoControl.value,
      email: this.emailControl.value,
      telefono: this.telefonoControl.value,
      commenti: this.commenti.value
    };
    console.log(
      this.nomeControl.value,
      this.cognomeControl.value,
      this.sessoControl.value,
      this.emailControl.value,
      this.telefonoControl.value,
      this.commenti.value
    );

    if (feedbackForm.valid) {
      const email = feedbackForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/asdlf7asdf',
        { name: email.nome, replyto: email.email, message: email.commenti },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
    
  }

}
