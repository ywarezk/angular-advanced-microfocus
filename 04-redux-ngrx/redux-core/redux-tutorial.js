// learning redux

// S0 + [ a0, a1, a2, a3  ] => currentState

function reducer(currentState, action) {
	if (action.type === 'deposit money') {
		return {
			...currentState, 
			amount: currentState.amount + action.payload
		}
	} else {
		return currentState;
	}
}

// { amount: 100 }
const store = Redux.createStore(reducer, {
	amount: 100
});

console.log(`our store holds this data: `);
console.log(store.getState());

store.subscribe(() => {
	
	document.getElementById('display-amount').innerText = store.getState().amount;
	
	// every data the data in the store is changed this
	// callback will be called
});


document.getElementById('deposit-button').addEventListener('click', () => {
	// change our data
	
	const action = {
		type: 'deposit money',
		payload: 10
	}
	
	store.dispatch(action);
});


/*

1. initial data - s0
2. reducer currentState, action => newState
3. dispatch(newAction)

*/
