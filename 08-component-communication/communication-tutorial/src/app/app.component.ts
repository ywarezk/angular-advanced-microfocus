import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Component communication</h1>

    <app-child (somethingHappened)="printMe($event)"   ></app-child>
  `
})
export class AppComponent {
  title = 'hello from parent';

  printMe(eventInformation) {
    console.log(eventInformation);
  }
}
