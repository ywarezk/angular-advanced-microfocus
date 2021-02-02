import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';

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
export class ParentComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('childContainer')
  child: ChildComponent;

  /**
   * jumps once
   * after my view and my children view is initialized
   * some initialization logic that i require my view to be ready first
   */
  ngAfterViewInit() {

  }

  /**
   * every change detection
   * perform action when my view and my children view is updated with the changes of the change detection
   * rare to use it
   */
  ngAfterViewChecked() {

  }


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
