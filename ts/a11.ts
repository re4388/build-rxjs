type NextCB = (data: number) => void;
type NextCbDOM = (evt: Event) => void;
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

interface ObserveDOM {
  next: NextCbDOM;
  complete: CompleteCB;
}

type SubscribeDOM = (obs: ObserveDOM) => void;
interface ClickObservable {
  subscribe: SubscribeDOM;
}

/** This could be an arrayObservable or clickObservable */
export const clickObservable: ClickObservable = {
  subscribe: function subscribe(ob) {
    document.addEventListener('click', ob.next);
    ob.complete();
  },
};

const arrNumber = [10, 20, 30];

export const arrayObservable: Observable = {
  subscribe: function (obs, arr) {
    arr.forEach(obs.next);
    obs.complete();
  },
};

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

arrayObservable.subscribe(observe, arrNumber);
