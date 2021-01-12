import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { GrandComponent } from './grand.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
