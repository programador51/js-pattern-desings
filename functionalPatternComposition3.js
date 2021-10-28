//////////////////////////////////////////////////////////////////////////////////////////

/**
 * The pure functions, they can be reused on any part of the code
 * Nice right? 
 */

/**
 * Get the double of a given number
 * @param {number} x - Number to double
 * @returns {number} Doubled number
 */
const double = x => x * 2;

/**
 * Add one unit to a number
 * @param {number} x - Number to add one
 * @returns {number} Number incremented by one
 */
const addOne = x => x + 1;

/**
 * Square a number
 * @param {number} x - The number to square     
 * @returns {number} Square number
 */
const square = x => x*x;

//////////////////////////////////////////////////////////////////////////////////////////

/**
 * But now, let compose it on the rigth way to avoid that readable mess up
 */

/**
 * Compose the functions
 * @param  {Function[]} fns - Functions to execute
 * @returns {any} The calculated value
 */
const compose = (...fns) => anyData => fns.reduceRight((memorizedValue,curFunction)=>curFunction(memorizedValue),anyData);

const complexOperation = compose(addOne,double,square)(2); // 9

/**
 * 
 * 1. You can use a library in order to avoid the code of line 42
 * https://ramdajs.com/docs/#compose
 * 
 * 2. Just one argument per function, nice, but in real world
 * it's not like that...
 * 
 */