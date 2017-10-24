import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule,MatIconModule} from '@angular/material';

//NgModule for material 
@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
//material done

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
