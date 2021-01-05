# @angular/cli

In this lesson we will go over advanced topics regarding @angular/cli.  

## angular app

- angular website/web application

## library

- class/function/objects which you can reuse in multiple apps

## Workspace

- contains multiple apps, multiple libraries

## @angular/cli

is a tool for create an angular workspace

## Create a workspace

```
npx @angular/cli new workspace-name --create-application=false
```

## Lesson Plan

- workspace
- creating a library
- Building and serving
- AOT / JIT
- What's changed in Angular

## EX.

- create a library called `@exlibris/auth`
- In that library create an interceptor called `JWTInterceptor`
- That interceptor should grab from the `localStorage` the `token` key where the JWT token is stored 
- After getting the token, the interceptor should update the request headers and add the following header:

```
{
	Authorization: Bearer <token>
}
```
- In the library we created, also create an `@NgModule` that module should register the interceptor we created.
- Does the `@NgModule` need to include in the `imports` array the `HttpClientModule` ?
- create an application that will use the library you created.
- To use the library modify the `paths` in the `tsconfig.json` to map to the source file if using the import from `@exlibris/auth@dev`.
- create a simple app that sends a request to the server when you click a button: 
https://nztodo.herokuapp.com/api/tasks/?format=json
- place a random jwt token in the localStorage and verify that the request is sent with the proper Authorization header.

