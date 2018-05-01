// const person = {
//   name: 'David',
//   age: 30,
//   location: {
//     city: 'Gloucester',
//     temp: 12
//   }
// };

// const name = person.name;
// const age =person.age;
// const {name, age} = person;
// console.log(`${name} is ${age}.`);

// const {name: firstName, age} = person;
// console.log(`${firstName} is ${age}.`);

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp } = person.location;
// console.log(`It's ${temp} in ${city}`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`);

// ---------------------------------------------------------------

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

// ------------------------------------------------------------------
// Array destructuring
// ------------------------------------------------------------------
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// console.log(`You are in ${address[1]}, ${address[2]}`);

// const [street, city, state, zip] = address;
// console.log(`You are in ${city}, ${state}`)

// const [, city, state] = address;
// console.log(`You are in ${city}, ${state}`)

// const address = ['1299 S Juniper Street', 'Philadelphia' ];
// const [, city, yourState = 'New York'] = address;
// console.log(`You are in ${city}, ${yourState}.`);

const item = ['Coffee (iced)','$2.00','$2.50', '$2.75'];
const [product, ,mprice] = item;
console.log(`A medium ${product} costs ${mprice}`);