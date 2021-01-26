/**
selector
taking the state and reading part of the state

selector is memoizable

function(bank) => bank.amount

 */

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BankState } from './bank.state';

const bank = createFeatureSelector<BankState>('bank');

 export const amountSelector = createSelector(
   bank,
   (bank) => bank.amount
 )

// amountSelector.clearResult();
