const name = "John";
const age = 30;

const person = {
  name,
  age,
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  },
};

console.log(person.greet());
