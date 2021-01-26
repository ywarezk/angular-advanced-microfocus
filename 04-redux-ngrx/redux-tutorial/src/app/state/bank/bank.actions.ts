/**

actions we have that change the bank section of our state

 */

 import { createAction, props } from '@ngrx/store';

 export const changeAmount = createAction(
   '[bank] Change Amount',
   props<{ money: number }>()
 )
