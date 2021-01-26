/**

This reducer will take care of the bank section of our state

{
  bank: {
    amount: 100,
    loans: ..
    morgages...
  }
}

 */

import { createReducer, on } from '@ngrx/store';
import { BankState } from './bank.state';
import { changeAmount  } from './bank.actions';

export const bankReducer = createReducer<BankState>(
  {
    amount: 100
  },
  on(
    changeAmount,
    (state, action) => ({...state, amount: state.amount + action.money})
  )
)
