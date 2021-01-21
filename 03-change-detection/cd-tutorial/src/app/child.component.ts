import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <h1 (click)="counter = counter + 1">
      ChildComponent {{ changeDetectionLog() }} {{message}} {{ hello$ | async }} {{ title }}
    </h1>

    <app-grand></app-grand>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit{
  @Input()
  message = 'did not get anything';

  counter = 0;

  hello$ : BehaviorSubject<string> = new BehaviorSubject('hello world');
  helloSubjectValue: string = 'hello world';

  title = 'i just want to print this';

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.hello$.subscribe((msg: string) => {
      this.helloSubjectValue = msg;
    });

    this.hello$.next('foo bar');

    setTimeout(() => {
      console.log('set timeout in child');
      this.hello$.next('hello sweetness');

      this.title = 'title is just';
      // this.count++;
      // this._cd.detectChanges();
      // this._cd.markForCheck();
    }, 2000)
  }

  changeDetectionLog() {
    console.log('Change Detection: ChildComponent');
  }
}
