 const isAdult = (x) => {
   if (x < 18) {
     return 'Not an adult'
   }
   else {
     return 'Is and adult'
   }
 }

 const canDrink = (x) => {
   if (x < 21) {
     return 'Cannot drink'
   }
   else {
     return 'Allowed to drink'
   }
 }

// Version 1
//  const seniorCitizen = (x) => {
//    if (x < 65) {
//      return 'Is not a senior citizen'
//    } else {
//      return 'Is a senior citizen'
//    }
//  }
//
// export default seniorCitizen

// Version 2
export default (x) => {
  if (x < 65) {
    return 'Is not a senior citizen'
  } else {
    return 'Is a senior citizen'
  }
}

export { canDrink, isAdult }
