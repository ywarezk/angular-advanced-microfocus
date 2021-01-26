# @ngrx/*

a set of libraries that helps
- Manage your data using Redux
- Additional libraries that helps you solve common problem with the data


## @ngrx/store

Givens you managing your data using Redux

## @ngrx/store-devtools

Debugging Redux

examine our store
examine the data in the store
examine the actions that change the data

Install this extension

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en



## Advantage 1 using Redux

dev tools

## State

```
{
  bank: {
    amount: 100,  
  },
  user: {
    firstName: 'Yariv',
    lastName: 'Katz'  
  }         
  
  
}
```

## Contract

## Best practice

your data should have a clear contract

## Advantage 2 - performance

all our components can easily be transformed to OnPush

## Advantage 3 - Predictability

if the data change is well defined

action = {type, payload}

store.dispatch(action)

reducer

state

## Advantage 4 - We work in similar way regarding data change in our app



 