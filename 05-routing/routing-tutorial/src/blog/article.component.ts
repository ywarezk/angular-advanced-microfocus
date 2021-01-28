import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-name',
  template: `
    <h1>
      I'm an article {{ foo$ | async }} {{ category$ | async }}
    </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {
  foo$ = this._activatedRoute.queryParamMap.pipe(
    map((queryParams) => queryParams.get('foo'))
  )


  category$ = this._activatedRoute.paramMap.pipe(
    // pathParams => { category: 'angular', title: 'routing'}
    map((pathParams) => pathParams.get('category'))
  )

  constructor(private _activatedRoute: ActivatedRoute) {
    // _activatedRoute.queryParamMap.subscribe((queryParams: ParamMap) => {
    //   queryParams.get('foo')
    // })

  }
}
