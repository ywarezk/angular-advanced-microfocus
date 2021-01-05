/**

Promises

 */
 
 // promise can be in one of the following states (3): 
 // 1. pending
 // 2. fulfilled
 // 3. rejected
 
 // pending -> fulfilled
 // pending -> rejected
 const oneSecPromise: Promise<string | number> = new Promise((resolve, rejected) => {
	 // you async code is placed here
	 
	 setTimeout(() => {
		//  resolve('hello listeners');
		 resolve(42);
		//  rejected(new Error('something happened'));
	 }, 1000);
	 
 });
 
oneSecPromise.then(
	(msg: string | number) => {
		console.log(msg)	
	},
	(err) => {
		console.log(err.message);
	}
)

oneSecPromise.then(
	(msg) => {
		console.log(msg)
	},
	(err) => {
		console.log(err.message);
	}
)

/*

# package.json
npm init --yes
npm install typescript
npm install ts-node
# creates tsconfig.json
npx tsc --init

*/