import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { map } from 'rxjs/operators';
import { amountSelector } from './state/bank/bank.select';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      NGRX Tutorial
    </h1>

    <p>
      Amount is: {{ amount$ | async }}
    </p>

    <app-deposit></app-deposit>

    <app-tasks></app-tasks>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  amount$ : Observable<number> = this._store.select(
    amountSelector
  )

  constructor(private _store: Store<AppState>) {}
}
