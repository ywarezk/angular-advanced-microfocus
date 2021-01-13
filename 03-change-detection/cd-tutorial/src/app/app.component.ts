import { Component, OnInit, ComponentRef, AfterViewInit, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


// ChangeDetectorRef - in charge of cd in this component
// determine for a component clean / dirty
// If you dont' add the OnPush ChangeDetectorRef is automatic
// OnPush - ChangeDetectorRef -> manual
// you need to manually tell the ChangeDetectorRef that it's dirty
// how to tell the ChangeDetectorRef that it's dirty, the easy way

@Component({
  selector: 'app-root',
  template: `
    <h1>AppComponent {{ changeDetectionLog() }} {{count}}</h1>

    <app-child></app-child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  count = 0;

  constructor(private _zone: NgZone, private _cd: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {

      this.count++;
      this._cd.detectChanges();
    }, 2000)
  }


  changeDetectionLog() {
    // this.count++; // wrong - no sideeffect
    console.log('Change Detection: AppComponent');
    // return Math.random();
  }
}
