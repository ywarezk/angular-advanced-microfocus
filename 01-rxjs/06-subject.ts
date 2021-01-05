/**
 *
 
 
 -----0----0-----0----0-------------->
 
*/

import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

const sampleSubject: Subject<string> = new Subject();

setInterval(() => {
	sampleSubject.next('hello');
}, 1000)

sampleSubject.next('hello listeners');
sampleSubject.next('hello listeners again');

sampleSubject.subscribe(
	(msg) => {
		console.log(msg);
	}
)

sampleSubject.next('this i will get');

sampleSubject.subscribe(
	(msg) => {
		console.log(msg);
	}
)

const sampleBehvaiourSubject: BehaviorSubject<string | null> = new BehaviorSubject(null);

sampleBehvaiourSubject.next('Yariv');

sampleBehvaiourSubject.value;


sampleBehvaiourSubject.subscribe((user) => {
	
})


