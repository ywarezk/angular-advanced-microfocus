import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MicroFocusCanDeactivate } from '../user.component';

@Injectable({
  providedIn: 'root'
})
export class FinishFormService implements CanDeactivate<MicroFocusCanDeactivate> {
  canDeactivate(component: MicroFocusCanDeactivate){
    return component.canDeactivate;
  }
}
