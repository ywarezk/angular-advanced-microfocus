import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand',
  template: `
    <h1>
      GrandComponent {{ changeDetectionLog() }}
    </h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandComponent implements OnInit {

  // fetch
  // XMLHttpRequest
  // constructor(private _http: HttpClient) { }

  ngOnInit() {
    // setTimeout(() => {
    //   console.log('setTimeout is running in grand');
    //   // this.count++;

    // }, 2000);
  }

  changeDetectionLog() {
    console.log('Change Detection: GrandComponent');
  }
}
