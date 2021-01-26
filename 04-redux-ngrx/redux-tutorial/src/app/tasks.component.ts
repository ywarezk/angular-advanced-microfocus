/**
 send a request to our server

 https://nztodo.herokuapp.com/api/tasks/?format=json

 to grab all the tasks and display them in a list
 */

import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityCollectionServiceFactory, EntitySelectorsFactory } from '@ngrx/data';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  template: `
    <h1>
      Grab data from server
    </h1>

    <ul>
      <li *ngFor="let task of tasks$ | async">
        {{ task.title }}
      </li>
    </ul>

  `,
})
export class TaskComponent implements OnInit {
  private _tasksService: EntityCollectionService<any>;

  tasks$: Observable<any> = this._store.select(this._selectorFactory.create('Task').selectEntities)

  constructor(
    serviceFactory: EntityCollectionServiceFactory,
    private _store: Store,
    private _selectorFactory: EntitySelectorsFactory
  ) {
    this._tasksService = serviceFactory.create('Task');
  }

  ngOnInit(): void {

    this._tasksService.getAll();

  }
}
