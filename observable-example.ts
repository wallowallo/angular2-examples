// - Observables makes you able to react to actions and functions that are
//   executing by subscribing it to an observable.

const observable = Observable.create((obs) => {
  obs.next('next');
  obs.error(new Error('fail'));
  obs.next('next');
  obs.complete('finished');
});

// - here we create the observable (the observable under error wont fire,
//   because error exits the function)

observable.subscribe(val); // (calling the observable)
