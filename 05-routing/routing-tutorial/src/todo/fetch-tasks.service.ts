import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchTasksService implements Resolve<any> {
  resolve() {
    return of([
      { "id": 9862, "title": "title", "description": "desc", "group": "45", "when": "2019-09-07T18:27:32.960000Z" }, { "id": 9866, "title": "title", "description": "desc", "group": "45", "when": "2019-09-07T18:27:32.960000Z" }, { "id": 9870, "title": "title", "description": "desc", "group": "45", "when": "2019-09-07T18:27:32.960000Z" }, { "id": 9874, "title": "title", "description": "desc", "group": "45", "when": "2019-09-07T18:27:32.960000Z" }, { "id": 9878, "title": "ssss", "description": "ddd", "group": "new1", "when": "2019-09-18T10:00:00Z" }, { "id": 9910, "title": "new", "description": "yuval_azani7", "group": "45", "when": "2019-09-21T12:30:35.620000Z" }, { "id": 9914, "title": "new", "description": "yuval_azani7", "group": "45", "when": "2019-09-21T12:30:35.620000Z" }, { "id": 9916, "title": "title", "description": null, "group": "1", "when": "2019-09-07T18:27:32.960000Z" }
    ]).pipe(
      delay(500)
    )
  }
}
