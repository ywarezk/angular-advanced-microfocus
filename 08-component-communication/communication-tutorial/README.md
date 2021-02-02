# Component Communication

parent ---> child

## 1. Input

pass information from parent to child
parent ---> child

## 2. Output

pass event from child to parent

parent <----- child


## Component / Directive Lifecycle

- DoCheck
- OnChanges - jumps every time input change, logic that needs to be performed when input change
- OnInit - jumps once, place complex initialization
- AfterContentInit
- AfterContentChecked
- AfterViewInit
- AfterViewChecked
- OnDestroy

