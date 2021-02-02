import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

// NgForm NgModel

/**
 *

 {
   email: '',
   password: ''
 }

 {
   email: '',
   passwordRepeat: {
    password: '',
    repeat: ''
   }

 }

 */

@Component({
  selector: 'app-login',
  template: `
    <form>
      <input type="email" name="email" ngModel />
      <input type="password" name="password" ngModel />
    </form>

  `,
})
export class LoginComponent {
}
