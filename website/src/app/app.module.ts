import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
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
    MatMenuModule
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
    MaterialModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,  
  
     
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAj5WVCzS-nhQJvJMJWBt-spgHIwRbPRW4'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
