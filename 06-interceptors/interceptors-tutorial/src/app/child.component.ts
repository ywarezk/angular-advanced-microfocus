import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  template: ``,
  styles: [``]
})
export class NameComponent implements OnInit {
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get(
      'http://nztodo.herokuapp.com/api/tasks/?format=json',
      {
        headers: {
          Authorization: 'Bearer 23423423423',
          'Content-Type': 'application/json',

        }
      }
    );
  }
}
