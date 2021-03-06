import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule,MatIconModule,MatButtonModule
,MatSidenavModule,MatFormFieldModule,MatInputModule,MatMenuModule} from '@angular/material';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ServicesComponent } from './services/services.component';
import { AgmCoreModule } from '@agm/core';
import {FormControl,FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//firebase
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from  'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NotificationsModule, NotificationsService} from 'angular4-notify';


export const firebaseConfig = {
 
  apiKey: "AIzaSyCz0T0ZmdOFZlskaxPKkZ_vgIoZ6VlssbM",
      authDomain: "deepaknagercoil.firebaseapp.com",
      databaseURL: "https://deepaknagercoil.firebaseio.com",
      projectId: "deepaknagercoil",
      storageBucket: "",
      messagingSenderId: "140601184665"
};


//Routing
const appRoutes: Routes = [
  {
  path: 'about',
  component: AboutComponent,
 
},
{
  path: 'home',
  component: HomeComponent,
 
},
{ path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'contact',
  component: ContactComponent,
 
},
{
  path: 'testimonial',
  component: TestimonialComponent,
 
},
{
  path: 'services',
  component: ServicesComponent,
 
},

];


//NgModule for material 
@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
//material done

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    TestimonialComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NotificationsModule,
    FormsModule,  
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  
     
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAj5WVCzS-nhQJvJMJWBt-spgHIwRbPRW4'
    }),AgmSnazzyInfoWindowModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true , useHash:true} // <-- debugging purposes only
    )
  ],
  providers: [ NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
