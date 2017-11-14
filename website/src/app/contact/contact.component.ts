import { Component, OnInit,Inject } from '@angular/core';
import {FormControl,FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import {NotificationsService} from 'angular4-notify';





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
  
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase,private http: Http,
    public snackBar: MatSnackBar,protected notificationsService: NotificationsService) 
  {
  
   
  }
  mess()
  {
    this.notificationsService.addInfo('message sent');
  }
  /**snack bar 
 

 
  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }
      
   

  end of snack bar */
  
  /**firebase */

  sendEmail() {
    let url = `https://console.firebase.google.com/project/deepakwebsite-a0cd0/overview`
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({headers: headers});
    params.set('to', 'drdeepaknagercoil@gmail.com');
    params.set('from', 'hello@gmail.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');
    return this.http.post(url, params, options)
    .map((res:Response) => res.json())
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })
  }
/**end of firebase */
  
  email = new FormControl('', [Validators.required, Validators.email]);
 
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
    onSubmit(formData:NgForm) {
      const name = formData.value.name;
      const email=formData.value.email;
      const message=formData.value.message;
      const date = Date();
      let formRequest = { name,email,message, date};
   console.log(formRequest);
      this.af.list('/messages').push( formRequest);
      formData.reset();
      formData.resetForm();
      
  }
}
  
/**snackbar 
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`.example-pizza-party { color: hotpink; }`],
})
export class PizzaPartyComponent {}
**/