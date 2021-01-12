import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>
      ChildComponent {{ changeDetectionLog() }}
    </h1>

    <app-grand></app-grand>
  `,
})
export class ChildComponent {
  constructor() { }

  changeDetectionLog() {
    console.log('Change Detection: ChildComponent');
  }
}
