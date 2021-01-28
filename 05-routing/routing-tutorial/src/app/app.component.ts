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
        <li>
          <a routerLink="/blog/angular/routing" [queryParams]="{foo: 'bar'}" >Angular routing article</a>
        </li>

        <li>
          <a routerLink="/admin"  >Admin</a>
        </li>
      </ul>
    </nav>

    <!-- instruct Router where to place the component -->
    <router-outlet></router-outlet>

    <footer>
      Some footer
    </footer>
  `
})
export class AppComponent {
}
