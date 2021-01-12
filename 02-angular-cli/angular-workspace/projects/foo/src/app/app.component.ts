import { Component } from '@angular/core';

// aot - ahead of time compilation
// jit - just in time compilation

@Component({
  selector: 'app-root',
  template: `
    <app-login></app-login>

    <h1>
     {{ title }}
    </h1>

    <div *ngIf="true">
    </div>
  `,
})
export class AppComponent {
  title = 'foo';
}
