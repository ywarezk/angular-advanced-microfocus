import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
    </form>
  `,
})
export class LoginComponent {
}
