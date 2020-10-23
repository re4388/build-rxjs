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

/* A case of fetch to get next and error callback */
function giveMeSomeData(
  nextCB: nextCBType,
  errorCB?: errorCBType,
  completeCB?: completeCBType
) {
  fetch(URL).then(nextCB, errorCB);
}

giveMeSomeData(nextCallback, errorCallback, completeCallback);
