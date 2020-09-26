

/* We have 3 callback and then we can cover all cases listed in
a1, a2, a3, a4  js files */
function nextCallback (data) {
  // ...
}

function errorCallback (err) {
  // ...
}

function completeCallback () {
  // ...
}



// need to contain cases for asy op, so we use cb
giveMeSomeData(
  nextCallback,
  errorCallback,
  completeCallback
)