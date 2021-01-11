# Angular Change Detection

## Lesson Plan

- About angular change detection
- order of change detection
- Zone.js
- NgZone
- OnPush
- ChangeDetectorRef

## EX.

Our goal in this EX. is to practice all the elements that cause a change detection on Push to trigger  

- All the components in this example should be set to OnPush

- Create a component that counts every second.  
`setInterval` will not work so we will use the `interval` operator and display it with the `async` pipe  
`async pipe will trigger change detection in OnPush`

- Create another component that counts every second.    
This time it will pass the counter to a child component.  
For the parent change detection you will have to use the `async` pipe.  
For the child the change detection will work cause:
`@Input change triggers change detection`.

- Create a component with a `setInterval` that counts every second.  
The counter should be displayed but only this component should trigger change detection and not the others. use `ChangeDetectorRef`  
`ChangeDetectorRef` trigger on push change detection.

- Create an event in a child and see how all the component until the one that have the event triggers change detection.  
`Event triggers change detection`.

