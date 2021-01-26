# Redux and NGRX

In this lesson we will learn how to manage our data using redux pattern and ngrx redux implementation

## Data Managment

- data you grab from a server
- local data
- user interaction data

## Store in Service

```
@Injecatable()
export class UserService {
	
}

@Component({
	...
})
export class SomeComponent {
	constructor(private _user: UserService) {}
}
```

## app grows

Service 1			component1
Service 2			component2
Service 3			component3
...					...
Service n 			component-m

## Data / state managment library

- redux
- mobx
- flux

## Redux implementation

- ngrx
- ngxs
- ng-redux



## Lesson Plan

- about redux
- about ngrx
- state
- store
- actions
- reducers

## EX.

Follow the ex and solution described in this video:

- https://www.youtube.com/watch?v=G6vd7gTNhQs&t=1975s