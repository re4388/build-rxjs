// import { clickObservable } from './a11';
// type NextCB = (data: number) => void;
// type NextCbDOM = (evt: Event) => void;
// type ErrorCB = (data: Error) => void;
// type CompleteCB = () => void;

// interface Observe {
//   next: NextCB;
//   error: ErrorCB;
//   complete: CompleteCB;
// }

// type SubscribeArray = (obs: Observe, arr: number[]) => void;
// interface ArrayObservable {
//   subscribe: SubscribeArray;
// }

// interface ObserveDOM {
//   next: NextCbDOM;
//   complete: CompleteCB;
// }

// type SubscribeDOM = (obs: ObserveDOM) => void;
// interface ClickObservable {
//   subscribe: SubscribeDOM;
// }

// const arrNumber = [10, 20, 30];


// type Map = () =>

// type CreateObservableArray = (
//   s: SubscribeArray
// ) => {
//     subscribe: SubscribeArray;
//   map: Map,
// };

// export const createObservableArray: CreateObservableArray = (subscribe) => {
//   return {
//     subscribe: subscribe,
//   };
// };


// export const arrayObservable2: ArrayObservable = createObservableArray(
//   function subscribe(obs, arr) {
//     arr.forEach(obs.next);
//     obs.complete();
//   }
// );


// export const observe: Observe = {
//   next: function (data: number) {
//     console.log(data);
//   },

//   error: function (error: Error) {
//     console.error(error);
//   },

//   complete: function () {
//     console.log('complete');
//   },
// };

// arrayObservable2.subscribe(observe, arrNumber);
