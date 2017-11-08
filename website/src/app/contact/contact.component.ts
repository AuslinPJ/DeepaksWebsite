import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';


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
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
 
    });
    this.user = this.afAuth.authState;
  }

  
  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }

    Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }
}