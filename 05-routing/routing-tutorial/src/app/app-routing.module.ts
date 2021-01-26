import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  declarations: [],
  imports: [
    // Router
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about', component: AboutPageComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule {}
