function giveMeSomeData(ob) {
  [10, 20, 30].forEach(ob.next);
  ob.complete();
}

/* Bundle 3 fns together and put into object,
we call it observer since we observe those callbacks */

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

giveMeSomeData(observer);
