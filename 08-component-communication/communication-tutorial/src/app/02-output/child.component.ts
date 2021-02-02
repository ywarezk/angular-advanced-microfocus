import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1> Child component </h1>
    <button (click)="sendHelloToParent()">
      alert the parent when the button is clicked
    </button>
  `,
})
export class ChildComponent {
  @Input('message')
  myMessage = '';

  @Output('somethingHappened')
  transferEventToParent: EventEmitter<string> = new EventEmitter();

  sendHelloToParent() {
    this.transferEventToParent.emit('hello world');
  }

}
