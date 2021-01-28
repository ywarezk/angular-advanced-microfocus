/**

layout that is repeating only in the admin pages

 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: `
    <!--  /admin/user  -->
    <!--  /admin/account  -->

    <h1>Admin Layout</h1>
    <nav>
      <ul>
        <li>
          <a routerLink="user">user admin page</a>
        </li>
        <li>
          <a routerLink="accounts">account admin page</a>
        </li>

      </ul>
    </nav>

    <router-outlet></router-outlet>

    <!--
      <router-outlet name="popups"></router-outlet>
    -->

  `,
})
export class AdminLayoutComponent {

}
