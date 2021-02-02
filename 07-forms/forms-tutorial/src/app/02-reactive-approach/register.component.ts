/**

{
  email: '',
  passwordRepeat: {
    password: '',
    repeatPassword: ''
  }
}

 */

 import { Component, OnInit } from '@angular/core';
 import { FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
 import { repeatPassword } from '../03-custom-validation/repeat-password';

// formGroup, formGroupName, formControl, formControlName, formArray, formArrayName

 @Component({
   selector: 'app-register',
   template: `
    <form [formGroup]="registerForm" >
      <input email required minlength="5" maxlength="100" formControlName="email" type="email" name="email" placeholder="enter email" />
      <div formGroupName="passwordRepeat">
        <input formControlName="password" type="password" name="password" placeholder="enter password" />
        <input type="password" formControlName="repeat" name="repeat" placeholder="Repeat the password" />
      </div>
    </form>
   `,
 })
 export class RegisterComponent {

   /*
   registerForm = new FormGroup({
     email: new FormControl(),
     passwordRepeat: new FormGroup({
       password: new FormControl(),
       repeat: new FormControl()
     })
   })
   */

   registerForm = this._formBuilder.group({
     email: ['yariv@nerdeez.com', [ Validators.email, Validators.required, Validators.minLength(5 )] ],
     passwordRepeat: this._formBuilder.group({
       password: '',
       repeat: ''
     }, {
         validators: [repeatPassword]
     })
   })

   constructor(private _formBuilder: FormBuilder) {}

 }
