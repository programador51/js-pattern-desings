/**
 * It's an IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 * And it can give us that "encapsulation" of POO
 * Just the functions can be accesed from outside, but
 * counter, just by the function itself, not the "instance"
 */
const testModule = (function () {
 
  const counter = 0;
 
  return {
 
    incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
  };
 
})();
 
// Usage:
 
// Increment our counter
testModule.incrementCounter();
 
// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();