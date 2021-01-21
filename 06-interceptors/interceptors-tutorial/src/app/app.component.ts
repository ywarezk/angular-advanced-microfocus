import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Interceptors {{tasks.length}}
    </h1>

    <button (click)="sendRequest()">
      Click to send request
    </button>
  `,
})
export class AppComponent {
  tasks: any[] = [];

  constructor(private _http: HttpClient) {}

  sendRequest() {
    this._http.get<any[]>(
      'http://nztodo.herokuapp.com/api/tasks/?format=json',
      {
        headers: {
          Authorization: 'Bearer 23423423423'
        }
      }
    )
      .subscribe((tasksFromServer) => {
        this.tasks = tasksFromServer;
      })
  }
}
