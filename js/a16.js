function map(transformFn) {
  const inputObservable = this;
  const outputObservable = createObservable(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function (x) {
        const y = transformFn(x);
        outputObserver.next(y);
      },
      error: (e) => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });
  return outputObservable;
}

function filter(condition) {
  const inputObservable = this;
  const outputObservable = createObservable(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function (x) {
        if (condition(x)) {
          outputObserver.next(x);
        }
      },
      error: (e) => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });
  return outputObservable;
}

function createObservable(subscribe) {
  return {
    subscribe: subscribe,
    map: map,
    filter: filter,
  };
}

const clickObservable = createObservable(function subscribe(ob) {
  document.addEventListener("click", ob.next);
});

const arrayObservable = createObservable(function subscribe(ob) {
  // 5
  [10, 20, 30].forEach(ob.next);
  ob.complete();
});

const observer = {
  next: function nextCallback(data) {
    console.log(data);
  },

  error: function errorCallback(err) {
    console.error(err);
  },

  complete: function completeCallback() {
    console.log("done");
  },
};

/*
also, we can also try this in browser
*/
clickObservable
  .map( ev => ev.clientX)
  .filter((x) => x < 200)
  .subscribe(observer);
