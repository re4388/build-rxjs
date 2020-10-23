type NextCB = (data: number) => void;
type ErrorCB = (data: Error) => void;
type CompleteCB = () => void;

interface Observe {
  next: NextCB;
  error: ErrorCB;
  complete: CompleteCB;
}

type Subscribe = (obs: Observe, arr: number[]) => void;

interface Observable {
  subscribe: Subscribe;
}

const arrNumber = [10, 20, 30];

/** refactor subscribe fn into an object, how can we call this object?
 * What is observe is looking at? observable
 */
export const observable: Observable = {
  subscribe: function (obs, arr) {
    arr.forEach(obs.next);
    obs.complete();
  },
};

/** Bundle 3 cb functions into observe object.
 * Call it "observe" given that fact this object is
 * observing 3 callback to act upon
 */
export const observe: Observe = {
  next: function (data: number) {
    console.log(data);
  },

  error: function (error: Error) {
    console.error(error);
  },

  complete: function () {
    console.log('complete');
  },
};

observable.subscribe(observe, arrNumber);
