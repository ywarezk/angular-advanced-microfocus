import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h1>{{ childContainer.message }}</h1>

    <app-child #childContainer ></app-child>

    <p #pDomObject>
      some dom element
    </p>

    <input ngModel #ngModelInstance="ngModel"  />


  `,
})
export class ParentComponent {

}

@Component({
  selector: 'app-child',
  template: `
    <h1>
      hello im the child
    </h1>
  `,
  exportAs: 'child'
})
export class ChildComponent {
  message = 'hello im the child'
}
