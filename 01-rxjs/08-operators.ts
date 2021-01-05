/**

Operators

1. creating operators
function interval(1000) {
	return new Observable(() => {...})	
}

2. modifying operators
// they are taking an old obsservable and creating a new one from the old
function map(cb) {
	return function(oldObservable) {
		return new Observable(...)
	}
}


 */
 
import { interval, Observable } from 'rxjs';
import { map, tap, mergeMap, filter } from 'rxjs/operators';

// 0 .. 1 .. 2

/*

---0------1------2------3------4-->
---0-------------2-------------4-->
---h-------------h-------------h-->



*/


const intervalObservable2: Observable<number> = interval(1000).pipe(
	filter((num) => {
		return num % 2 === 0
	}),
	map((num: number) => {
		return 'hello world'
	}),
	// tap()
	// mergeMap()
);