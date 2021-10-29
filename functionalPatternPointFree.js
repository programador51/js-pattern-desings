/**
 * CODE WITHOUT POINT FREE STYLE
 * As you can see at line 29, i must "declare"
 * the argument to use on "displayName", aslo, i need to wrap
 * the function on a function to execute it.
 * With point free style this is the opossite
 */

/**
 * @typedef User
 * @type {Object}
 * @property {string} firstName - User firstname
 * @property {string} lastName - User lastname
 */

/**
 * Print the fuill name of a person
 * @param {User} user - User info
 * @returns {string} User fullname
 */
const displayName = user => `${user.firstName} ${user.lastName}`;

/**
 * @type {User[]} List of people
 */
const people = [
    {firstName:'Maria',lastName:'Antonieta'},
    {firstName:'John',lastName:'Milton'},
    {firstName:'Juan',lastName:'Perez'}
];

const names = people.map(person=>displayName(person)); //  ['Maria Antonieta', 'John Milton', 'Juan Perez' ]


///////////////////////////////////////////////////////////////////////////////////////////

/**
 * CODE WITH POINT FREE STYLE
 * Same result, but wans't need to pass the name of arguments
 * or wrap it inside a function
 */

const pointFreeStyle = people.map(displayName); //['Maria Antonieta', 'John Milton', 'Juan Perez' ]
