// Add the following line to app.js to run this:
// import './playground/promises';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      message: 'This is my data',
      data: 'Everything!'
    });
    // reject('Something went wrong');
  }, 5000);
});
  
console.log('before');

// This will wait 5 secs before being printed to the screen
promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });
}).then((str) => {
  // This will run only if the previous resolve is run
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');