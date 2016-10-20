// - const makes this object read only, but if you target its properties you can change it.
const person = { name: 'Peter', age: 42 };

// - that means that you cant re-define person, this would would not be possible.
//person = { name: 'Pete', age: 43 };

// - this on the otherhand would be possible
person.name = 'Mark';
person.age = 55;

// - you can also make new properties by targeting person like so in the js file:
// - will not transpile the ts file with this.
//person.hair = 'short';
//person.height = 180;

console.log(person);

// - let behaves more like var, but the value doesnt get hoisted to the top,
// - its kept in its scope, and the value can be changed at a later time.
let y = 5;
y = 8;
console.log(y);
