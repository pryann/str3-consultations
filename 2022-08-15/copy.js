const user = {
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
  age: 23
}

// const user2 = user;
const user2 = {...user}; // shallow copy
console.log(user);
console.log(user2);

const user3 = JSON.parse(JSON.stringify(user)); // deep copy
user.name.lastName = 'Doedoe';
console.log(user2);
console.log(user3);