import { Component, OnInit } from '@angular/core';

export interface MicroFocusCanDeactivate {
  canDeactivate: boolean;
}

@Component({
  selector: 'app-user',
  template: `
    <h1>
      User Admin page
    </h1>
    <form (submit)="handleForm($event)">
      <input type="text" />
      <button type="submit">
        Submit {{canDeactivate}}
      </button>
    </form>
  `,
})
export class UserComponent implements MicroFocusCanDeactivate {
  canDeactivate = false;

  handleForm(event) {
    event.preventDefault();
    this.canDeactivate = true;
  }
}
