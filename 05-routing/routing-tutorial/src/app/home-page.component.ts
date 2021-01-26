import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h1>
      Home page
    </h1>

    <button (click)="navigate()">
     move to about page
    </button>
  `,
})
export class HomePageComponent {
  constructor(private _router: Router) {}

  navigate() {
    this._router.navigateByUrl('/about');
  }
}
