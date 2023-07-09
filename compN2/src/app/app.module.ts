import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FormcontactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
