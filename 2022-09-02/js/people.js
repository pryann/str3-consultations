import store from './state.js';
// [1, 2, 3]
const generateId = () => Math.max(...store.people.map((person) => person.id)) + 1;

// findAll
export const findAllPerson = () => store.people;

// create -   C
export const createPerson = (person) => {
  const newPerson = { id: generateId(), ...person };
  store.people = [...store.people, newPerson];
  return newPerson;
};

// findById - R
export const findPersonById = (id) => store.people.find((person) => person.id === id);

// update -   U
export const updatePerson = (id, updatedPerson) => {
  store.people = store.people.map((person) => (person.id === id ? { ...person, ...updatedPerson } : person));
  return findPersonById(id);
};

// delete -   D
export const removePerson = (id) => {
  store.people = store.people.filter((person) => person.id !== id);
};
