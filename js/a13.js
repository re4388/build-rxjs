function map(transformFn) {
  // 2. we know we will have an innerObservable to transform, and `this` comes from
  // below and we need to get it as inputObservable
  // return {
  //   subscribe: subscribe,
  // }
  const inputObservable = this;

  // so, how do we create our new Observable? well.. we have createObservable function!
  // we will need to have "giveMeData" fns and inside, we need to use inputObservable.getMeData
  // and it will have three cb and we will implement our transformFn logic in next function
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

  // 1. we know we will output an observable, after .map, we will need to subscribe
  return outputObservable;
}

function createObservable(subscribe) {
  return {
    subscribe: subscribe,
    map: map,
  };
}

const clickObservable = createObservable(function subscribe(ob) {
  document.addEventListener("click", ob.next);
});

const arrayObservable = createObservable(function subscribe(ob) {
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

/* let's implement map */
arrayObservable.map(
  (x) => x / 10
  )
  .subscribe(observer);
