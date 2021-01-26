import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Routing tutorial
    </h1>

    <nav>
      <ul>
        <li>
          <a routerLink="/">Home page</a>
        </li>
        <li>
          <a routerLink="/about">about page</a>
        </li>
      </ul>
    </nav>


    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
