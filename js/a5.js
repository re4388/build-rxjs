function nextCallback(data) {
  console.log(data);
}

function errorCallback(err) {
  // ...
}

function completeCallback() {
  // ...
}

/* A case of addEventListener */
function giveMeSomeData(nextCB, errorCB, completeCB) {
  document.addEventListener("click", nextCB);
}

giveMeSomeData(nextCallback, errorCallback, completeCallback);
