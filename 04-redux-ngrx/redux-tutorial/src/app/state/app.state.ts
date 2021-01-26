/**
an entire interface of our state
 */

import { BankState } from "./bank/bank.state";


export interface AppState {
  bank: BankState,
  // user: UserState
}
