import subtract, { square, add } from './utils.js'
import seniorCitizen, { canDrink, isAdult } from './person.js'

console.log('//---------------------//');
console.log(square(5));
console.log(add(500, 122));
console.log(subtract(500, 122));

console.log('//---------------------//');
console.log(canDrink(10));
console.log(canDrink(30));
console.log(isAdult(15));
console.log(isAdult(35));
console.log(seniorCitizen(35));
console.log(seniorCitizen(70));
