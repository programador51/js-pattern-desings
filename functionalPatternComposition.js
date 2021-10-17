/////////////// MONADIC function, just accepts one argument

/**
 * Sum "1" to an "x" number
 * @param {number} number - X number to sum
 * @returns {number} Result of the plus operation
 */
const plusOne = number => number + 1;

/////////////// NOT MONADIC cause it takes two or more arguments

/**
 * Sum to numbers
 * @param {number} x - A number
 * @param {number} y - A number
 * @returns {number} The result plus of the numbers
 */
const plusNumbers = (x,y) => x + y;

const curry = x => y => x + y;

////////// COMPOSITION ?
/*
1. understanding complex business logic of a problem,
2. breaking the problem down to a set of smaller problems,
3. solving the smaller problems one at a time, and
4. putting it back together to form a coherent solution.

The main idea it's separate each "task" the atomic possible
in order to be able to reuse all the pieces code
programmed, so it's not attached to an specific 
problem resolution. 

Function composition is based on the use of monadic (unary) curried and preferably pure functions.
*/

/**
 * Plus "1" to a number     
 * @param {number} a - A number
 * @returns {number} Number increased in one
 */
const plusOneCompo = a => a + 1;

/**
 * Plus "2" to a number
 * @param {numer} a - A number
 * @returns {number} Number increased by two
 */
const plusTwo = a => a + 2;

/**
 * Plus "3" to a number
 * @param {number} myNumber - Any number
 * @returns {number} Number increased by three
 */
const composePlusThree = myNumber => plusTwo(plusOneCompo(myNumber));

console.log(composePlusThree(10)); // 13