/**

1. classify your async code
 */
 
// marble diagram


setTimeout(() => {
	console.log('async code examples')
}, 1000);

// memory leaks
setInterval(() => {
	console.log('async code that will not terminate')
}, 1000);

// questions that you need to answer before writing your async code:

// 1 will the callback be called once or multiple times
// 2. will my async code end
// 3. can my async code fail

/**

---0----0----0----0---|----->
---0----0----0--------X----->


// Promise
----------0---|--------------->
--------------X--------------->


 */