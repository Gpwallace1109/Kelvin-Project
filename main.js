// Kelvin Project 

// Value of Kelvin temperature = 293 
const Kelvin = 293; 
// console.log(Kelvin); 

// Convert Kelvin to Celsius = 20
let celsius = Kelvin - 273; 
// console.log(celsius); 

// Convert celsius to Fahrenheit = 68 
let Fahrenheit = (celsius * (9/5)) + 32.8; 
// console.log(Fahrenheit); 

// Rounding up number from Fahrenheit
Fahrenheit = Math.floor(Fahrenheit); 
// console.log(Fahrenheit); 

// String Interpolation for console to log Fahrenheit 
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`); 

// NEWTON Extra practice 
// let Newton = (celsius * (33/100)); 
// Newton = Math.floor(Newton); 
// console.log(`The temperature outside is ${Newton} degrees Fahrenheit`);
