/**

How many times does the async function that is inside a promise or observable, how many times is it called

 */
 
 
// in promise the async function is called once

/*
const oneSecPromise1: Promise<string | number> = new Promise((resolve, rejected) => {
	console.log('how many times does this function run?')
	
	setTimeout(() => {
		resolve('hello listeners');
	}, 1000);
});

oneSecPromise1.then((msg) => {
	// console.log(msg);
});

oneSecPromise1.then((msg) => {
	// console.log(msg);
});

oneSecPromise1.then((msg) => {
	// console.log(msg);
});

*/


import { Observable } from 'rxjs';


/**
 * 
 
 -----0----0-----0----0-------------->
 
 -----0----0-----0----0-------------->
 
 -----0----0-----0----0-------------->
 
 -----0----0-----0----0-------------->
 
 */

const oneSecInterval: Observable<string> = new Observable((observer) => {
	// you async code is placed here
	console.log('how many times does this function run?')

	setInterval(() => {
		observer.next('hello listeners');
	}, 1000);
});

oneSecInterval.subscribe(
	(msg: string) => {
		// console.log(msg);
	}
)

oneSecInterval.subscribe(
	(msg: string) => {
		// console.log(msg);
	}
)

oneSecInterval.subscribe(
	(msg: string) => {
		// console.log(msg);
	}
)

oneSecInterval.subscribe(
	(msg: string) => {
		// console.log(msg);
	}
)


// Promise VS Observable

// promise the async function is called once regardless of the amount of listeners
// observable the async function is called according to the amount of listeners