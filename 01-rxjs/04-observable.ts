/**

RXJS

---0---0---0---0---|---------------->
---0---0---0---0-------------------->
---0---0---0---0----0---0---0---X---------->

---0--|--------------->

------X--------------->

 */
 
// Observable

import { Observable } from 'rxjs';

const oneSecInterval: Observable<string> = new Observable((observer) => {
	// you async code is placed here
	
	setInterval(() => {
		observer.next('hello listeners');
		// i can call next multiple times
		// observer.next('hello listeners1');
		// observer.next('hello listeners1');
		
		// observer.error(new Error('something happened'));
	}, 1000);
});

oneSecInterval.subscribe(
	(msg: string) => {
		console.log(msg);
	},
	(err) => {
		console.log(err.message);
	}
)

// Promise VS Observable

// next can be called multiple times