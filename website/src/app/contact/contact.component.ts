import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  title: string = 'Location';
  lat: number = 8.184634;
  lng: number = 77.410362;
 
  
  email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }


}