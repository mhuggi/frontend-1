// WAIT FOR GIVEN MILLISECONDS
function sleep (time) {
   return new Promise((resolve) => setTimeout(resolve, time));
}

// WRAP RESPONSE IN PROMISE
function promisify(data, time) {
   return new Promise(resolve => {
      sleep(time * 1000).then(() => {
         resolve(data)
      })
   })
}

export {
   sleep,
   promisify
}