import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent  {
  title: string = 'Location';
  lat: number = 8.184634;
  lng: number = 77.410362;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
  
   
  }
  
  
  email = new FormControl('', [Validators.required, Validators.email]);
 
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must ..S enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
    onSubmit(formData:NgForm) {
      const name = formData.value.name;
      //const email1=formData.value.email1;
      const message=formData.value.message;
      const subject=formData.value.subject;
      const date = Date();
      let formRequest = { name,  message,subject, date};
   console.log(formRequest);
      this.af.list('/messages').push( formRequest);
      //this.adForm.reset();
      
  }
}
  


