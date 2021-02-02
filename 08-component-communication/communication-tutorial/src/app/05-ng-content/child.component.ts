import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ContentChild, ElementRef, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child>
      <input #emailInput type="email" name="email" placeholder="Enter your mail" />
    </app-child>
  `,
})
export class ParentComponent  {

}

@Component({
  selector: 'app-child',
  template: `
    <h1>
      hello im the child
    </h1>

    <!--
    <ng-content></ng-content>
    -->
  `,
  exportAs: 'child'
})
export class ChildComponent implements AfterContentInit, AfterContentChecked {

  @ContentChild('emailInput')
  input: ElementRef;

  /**
   * called once
   * initialization that require the ng-content
   */
  ngAfterContentInit() {

  }

  /**
   * every cd
   * perform logic after the content changes has been made
   * rarely
   */
  ngAfterContentChecked() {

  }

}
