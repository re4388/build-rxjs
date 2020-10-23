/** for includes..
 * 1. sync cb for arry method
 * 2. async callback, like fetch, promised callback,
 * fulfilled and rejected
 * 3. node.js callback, 3 callback, next, complete, error
 */

type nextCBType = (evt: Event) => void;
type errorCBType = (data: Error) => void;
type completeCBType = (data: string) => void;

export const nextCallback: nextCBType = function (evt: Event) {
  console.log(evt);
};

export const errorCallback: errorCBType = function (error: Error) {
  console.error(error);
};

export const completeCallback: completeCBType = function () {
  console.log('complete');
};

/* A case of addEventListener */
function giveMeSomeData(
  nextCB: nextCBType,
  errorCB?: errorCBType,
  completeCB?: completeCBType
) {
  document.addEventListener('click', nextCB);
}

/** when we call giveMeSomeData, there will be 3 situations
 * lead to 3 callback functions
 */
giveMeSomeData(nextCallback, errorCallback, completeCallback);
