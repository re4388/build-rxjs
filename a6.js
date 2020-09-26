function nextCallback(data) {
  console.log(data);
}

function errorCallback(err) {
  console.error(err);
}

function completeCallback() {
  // ...
}


/* A case of fetch to get next and error callback */
function giveMeSomeData(nextCB, errorCB, completeCB) {
  fetch(URL).then(nextCB, errorCB);
}

giveMeSomeData(nextCallback, errorCallback, completeCallback);
