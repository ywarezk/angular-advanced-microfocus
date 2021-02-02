/**

<app-child [message]="someMessage" [user]="newUser"></app-child>

 */

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1> Child component </h1>
  `,
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input('message')
  myMessage = '';

  @Input('user')
  set user(newUser: Object) {
    this._user = newUser;

    // perform additional logic whenever my user change
  }

  private _user: Object;

  ngDoCheck() {

  }

  /**
   * every time out input properties change
   * it will contain in the argument data about the change
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {

  }


  /**
   * @Input properties will be initialized
   * jumps once
   */
  ngOnInit() {

  }



  ngOnDestroy() {

  }
}
