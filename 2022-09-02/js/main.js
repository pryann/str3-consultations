import {
  findAllPerson, findPersonById, createPerson, updatePerson, removePerson,
} from './people.js';

console.log(findAllPerson());
console.log(findPersonById(1));
console.log(createPerson({ name: 'New Person', age: 0 }));
console.log(findAllPerson());
console.log(updatePerson(1, { name: 'JOHN' }));
console.log(findAllPerson());
removePerson(2);
console.log(findAllPerson());
