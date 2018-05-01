console.log('utils.js is running!');

export const square = (x) => x * x;
export const add = (a,b) => a + b;

// exports - default & named

// const subtract = (a,b) => a - b;

// export { subtract as default };

export default (a,b) => a - b;