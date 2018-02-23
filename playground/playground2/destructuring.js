// Object Destructuring
const person = {
  name: 'Adrian',
  age: 26,
  location: {
    city: 'Toronto',
    temperature: 20
  }
}

// structured
console.log(`My name is ${person.name}, and i'm ${person.age}`);

// destrucred
const { name: firstName = 'Anoymous', age } = person
console.log(`My name is ${firstName}`);


const { city, temperature } = person.location
if (city && temperature ) {
  console.log(`I currently live in ${city} and the temperature is ${temperature} degrees celcius`);
}


const book = {
  title: '48 Laws of Power',
  author: 'Robert Greene',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published'} = book.publisher
console.log(publisherName);


// Array Destructuring
const address = ['617 Church Street','Toronto', 'Ontario', 'L5T0P1']
const [street, currentCity, province, poastalcode] = address
console.log(`You are in ${currentCity} ${province}`);

const address2 = []
const [ , , province2 = 'Nova Scotia'] = address2
console.log(`You are in ${province2}`);


const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75']
const [itemName, smallPrice, mediumPrice, largePrice] = item
console.log(`A small ${itemName} costs ${smallPrice}`);
console.log(`A medium ${itemName} costs ${mediumPrice}`);
console.log(`A large ${itemName} costs ${largePrice}`);
