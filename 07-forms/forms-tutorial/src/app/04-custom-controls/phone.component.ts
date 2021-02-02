/**

<form>
  <input name="prefix" ngModel formControlName required />
  <input name="mainNumber" ngModel />

  // custom form control
  // 052-2222222
  <microfocus-phone [ngModel]="phone"></microfocus-phone>

  <input type="credit-card" />
  <input type="city" />
</form>

 */

 import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

 @Component({
   selector: 'microfocus-phone',
   template: `
    <input type="text" placeholder="prefix" [formControl]="prefix" (blur)="blur()" />
    <input type="text" placeholder="main number" [formControl]="mainNumber" (blur)="blur()" />
   `,
   providers: [
     {
       provide: NG_VALUE_ACCESSOR,
       multi: true,
       useExisting: PhoneComponent
     }
   ]
 })
 export class PhoneComponent implements ControlValueAccessor, OnInit {

   prefix = new FormControl();
   mainNumber = new FormControl();

   change;
   blur;

   /**
    * the parent is transfering phone number to use
    * and we need to update our inputs
    * @param obj
    */
   writeValue(phoneNumber: string): void {
     const [prefix, mainNumber] = phoneNumber.split('-');
     this.prefix.setValue(prefix);
     this.mainNumber.setValue(mainNumber);
   }

   registerOnChange(fn: any) {
     this.change = fn;
   }

   ngOnInit() {
     this.prefix.valueChanges.subscribe((prefix) => {
       this.updateParent()
     })

     this.mainNumber.valueChanges.subscribe((mainNumber) => {
       this.updateParent()
     })
   }

   updateParent() {
     this.change(`${this.prefix.value}-${this.mainNumber.value}`);
   }

   registerOnTouched(fn: any) {
     this.blur = fn;
   }
 }
