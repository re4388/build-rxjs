/*
We refactor subscribe fn into Observable object method
observer watch callbacks
what observer is watching at? => Observable  (in this case, you can think that's 10, 20, 30, get me data..)
*/

const Observable = {
  subscribe: function subscribe(ob) {
    [10, 20, 30].forEach(ob.next);
    ob.complete();
  },
};

//
// go up into Observable object
//
// function subscribe(ob) {
//   [10, 20, 30].forEach(ob.next);
//   ob.complete();
// }

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
Observable.subscribe(observer);
