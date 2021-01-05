# RXJS

In this lesson we will improve our tools for dealing with async code by diving thoroughly to RXJS.

## Lesson Plan

- about async code
- classifying your async code
- Promise
- Observable
- Observer
- Subject
- Operators

## Student EX.

### Throttling 

Throttling is the process of prioritize action A on action B.
In this ex we will prioritize the user typing in search field over http request.

- Using @angular/cli create a new angular project
- in **AppComponent** you should place a text input for searching along with an unordered list **ul** displaying items from a server.
- Our server is located at the following URL: 
https://nztodo.herokuapp.com/api/tasks/?format=json&search=`<search string>`
- it will accept a search string and display a filtered list according to the search param.
- when the user types search text our app should send a request to the server and display the list that the server returns.
- We want to send one request when the user stopped typing and not many requests with each character.
- To achieve this we will create a **Directive** that is attached to a text input.
- That directive should expose an event called **throttling** which will send a $event of type string of the string the user typed.
- The throttling event will not be invoked every character but rather after the suer stopped typing text (1 sec passed without additional characters typed).
- In the directive you can get the input by requesting **ElementRef** 
- you can use the **fromEvent** operator to create an observable from the input event of the text input
- you can use the **debounceTime** operator to activate an **EventEmitter** after the user finished typing.


### Popular operators

- Create a playground where you can experiment with these popular operators.
- For creating the playground do the following:
  - Create a new folder **operators-playground**
  - In that folder init npm
  ```
  > npm init --yes
  ```
  - Install typescript
  ```
  > npm install typescript -D
  ```
  - Install ts-node and rxjs
  ```
  > npm install ts-node rxjs
  ```
  - create a default **tsconfig.json**
  ```
  > npx tsc --init
  ```
  - Create a file **hello.ts**
  - To run this file:
  ```
  > npx ts-node hello.ts
  ```
After creating the playground your job is to use the following operators.
It might be easier to use some operators by creating subjects.
This is the list of popular operators you should familiarize yourself with:
- map
- filter
- debounceTime
- mergeMap
- interval
- of
- tap
- catchError
- withLatestFrom
- merge

