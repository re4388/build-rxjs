type nextCBType = (data: number) => void;
type errorCBType = (data: Error) => void;
type completeCBType = (data: string) => void;

export const nextCallback: nextCBType = function (data: number) {
  console.log(data);
};

export const errorCallback: errorCBType = function (error: Error) {
  console.error(error);
};

export const completeCallback: completeCBType = function () {
  console.log('complete');
};

/** A case of fetch to get next and error callback */
function giveMeSomeData(
  nextCB: nextCBType,
  errorCB?: errorCBType,
  completeCB?: completeCBType
) {
  [10, 20, 30].forEach(nextCB);
}

giveMeSomeData(nextCallback, errorCallback, completeCallback);
