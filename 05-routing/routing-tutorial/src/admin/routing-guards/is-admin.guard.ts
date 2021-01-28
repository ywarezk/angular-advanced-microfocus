/**

 Check if our current user is admin or not

 */


import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService implements CanActivateChild {
  canActivateChild() {
    // Observable<User>
    return of( { firstName: 'Yariv', email: 'yariv@nerdeez.com', role: 'user' } ).pipe(
      delay(500)
    ).pipe(
      map((user) => user.role === 'admin')
    )
  }
}
