import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // NgForm, NgModel
    ReactiveFormsModule // FormControlName, formGroup,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
