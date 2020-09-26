/*
 * add a helper function to easily create Observable object
 */
function createObservable(subscribe) {
  return {
    subscribe: subscribe,
  };
}

/* then we can refactor ... */
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

/* subscribe means give me data */
arrayObservable.subscribe(observer);
