/** promise, async operation */

export const response = fetch('https://jsonplaceholder.typicode.com/todos/1');

function successCallback(value: unknown) {
  console.log(`we got ${value}`);
}

function failureCallback(err: Error) {
  console.log(`error: ${err}`);
}

response.then(successCallback, failureCallback);
