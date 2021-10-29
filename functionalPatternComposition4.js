/**
 * What happens if it's necessary to compose
 * and one of the functions it's not unary ??
 */

const messages = ['Hello','bye'];

/**
 * Double a number
 * @param {number} x - Multiply by two a number
 * @returns {number} Number doubled
 */
const double = x => x * 2;

/**
 * Check how many letters has a text
 * @param {string} text - Text to evaluate
 * @returns {number} Number of characters that has the text
 */
const getLength = text => text.length

/**
 * Check the number of words that contain an array of "words"
 * @param {string[]} words - Words/Text to evaluate
 * @returns {number[]}
 */
const mapTextSize = words => words.map(word=>getLength(word));

/**
 * Double the numbers that has an array
 * @param {number[]} numbers - Array of numbers to double
 * @returns {number[]} Doubled numbers
 */
const mapDoubleItems = numbers => numbers.map(number=>double(number));

/**
 * This will instead of compose will be use the pipe
 */
const pipe = (...fns) => input => fns.reduce((mem, fn) => fn(mem), input);

/**
 * Get the size of the words by double
 * @param {string[]} Words
 * @returns {number[]} Size of the words doubled
 */
const doubleLengthWords =  pipe(mapTextSize,mapDoubleItems)(messages); // [10,6]

/**
 * What kind of functions to compose?
    As we could see, it’s easiest to compose functionality out of functions that are:
    unary — ones that accept just one argument,
    small — to achieve more reusability,
    pure — this is especially important when composing complex functionality, as function impurity is “contagious”,
    curried, and accepting data as the last argument — to make expressions more concise.
 */