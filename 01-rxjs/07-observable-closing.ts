/**

----0----0----0----0----0---|------>

----0----0----0----0----0---X------>

 */


import { Observable, Subscription } from "rxjs";


const oneSecInterval: Observable<string> = new Observable((observer) => {
	const counterId = setInterval(() => {
		// observer.next('hello listeners');
		
		// observer.error(new Error());
		
		observer.complete();
		
		// will not be called
		observer.next('hello listeners');
	}, 1000);
	
	// if cleanup is needed you can return a cleanup function from the async
	return () => {
		clearInterval(counterId);
	}
});

const subscription: Subscription = oneSecInterval.subscribe(
	() => {
	
	},
	(err) => {
		console.log()
	},
	() => {
		
	}
)

subscription.unsubscribe();

/**

@Component({
	....
	template: `
		{{ foo$ | async }}
		
	`
})
export class HelloComponent implements OnDestroy {
	foo$: Observable<string>
	
	ngOnDestroy() {
		this.sub.unsubscribe()
	}
	
}


 */