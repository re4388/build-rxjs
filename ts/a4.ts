/** for includes..
 * 1. sync cb for arry method
 * 2. async callback, like fetch, promised callback,
 * fulfilled and rejected
 * 3. node.js callback, 3 callback, next, complete, error
 */

function nextCallback(data) {
  //...
}

function errorCallback(error) {
  //...
}

function completeCallback() {
  //...
}

/** when we call giveMeSomeData, there will be 3 situations
 * lead to 3 callback functions
 */
giveMeSomeData(nextCallback, errorCallback, completeCallback);
