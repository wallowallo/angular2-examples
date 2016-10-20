const name = 'Joe';
const getName = () => 'Jerry';
// - backticks makes us able to reference values and functions inside the string
// - this is a huge advantage, because we dont have to break the string to write what we need.
console.log( `Hello there ${name}! How are you today, ${getName()}?` );

console.log( `Hello there ${ true ? name : getName() }` );
