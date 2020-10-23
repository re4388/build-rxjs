type NextCBType = (data: number) => void;
type ErrorCBType = (data: Error) => void;
type CompleteCBType = () => void;

interface Observe {
  next: NextCBType;
  error: ErrorCBType;
  complete: CompleteCBType;
}

const arrNumber = [10, 20, 30];

export function subscribe(obs: Observe, arr: number[]): void {
  arr.forEach(obs.next);
  obs.complete();
}

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

subscribe(observe, arrNumber);
