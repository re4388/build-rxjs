const readable = getReadableStream();

function nextDataCb(chunk) {
  console.log(`Received ${chunk} bytes of data `);
}

function errorCb(err) {
  console.error(`Bad stuff happened ${err}`);
}

function doneCb() {
  console.log("There will be no more data");
}

readable.on("data", nextDataCb);
readable.on("error", errorCb);
readable.on("end", doneCb);
