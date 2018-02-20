console.log('utils js is running');

const square = (x) => { return x*x }
const add = (a,b) => a + b
const subtract = (a,b) => {
  return a - b
}
// default exports

export { square, add, subtract as default }
