/**
button that will deposit 10$

 */

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeAmount } from './state/bank/bank.actions';

@Component({
  selector: 'app-deposit',
  template: `
    <button (click)="deposit()">
      Deposit 10$
    </button>
  `,
})
export class DepositComponent {

  constructor(private _store: Store) {}

  /**
   * change our redux state
   * add 10$ to the amount
   */
  deposit() {
    this._store.dispatch(changeAmount({ money: 20 }));
  }

}
