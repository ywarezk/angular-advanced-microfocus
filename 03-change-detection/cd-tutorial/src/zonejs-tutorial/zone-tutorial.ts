import 'zone.js';

console.log('zone.js experiment');

// zone.js execution context library.

console.log(Zone.current.name);


const angularApartment = Zone.current.fork({
  name: 'angular',
  onHasTask: () => {
    console.log('something async happened');

    console.log('i can trigger cd when the set timeout returns');
  }
});

angularApartment.run(() => {

  console.log(`this is running from the apartment: ${Zone.current.name}`);

  setTimeout(() => {
    console.log('setTimeout is running in the angular');
  }, 1000);

})




