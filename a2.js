// promise, fetch cb, async
const res = fetch("https://jsonplaceholder.typicode.com/todos/1");

function successCb(val) {
  console.log(`we got back ${val}`);
}

function failCb(err) {
  console.log(`error: ${err}`);
}

res.then(successCb, failCb);
