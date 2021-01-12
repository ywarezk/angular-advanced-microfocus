# Change Detection

## What is change detection

angular suspects that something is changed, and recalculated the dynamic values in the template

## When does cd happens?

- timers - setTimeout, setInterval
- Events -
- Promise / Observable

something async happens

## Automatic change detection

you don't have to tell angular to run change detection.  
Angular will do it auto after something async happens

- the downside is speed
- the upside is comfort

## Order of change detection

when angular runs change detection it will run it on all components.  
it will run cd from top to bottom.


