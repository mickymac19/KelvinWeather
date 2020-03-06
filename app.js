const kelvin = 0
//forecast today
const celsius = kelvin -273;
//convert Kelvin to Celsius
let fahrenheit = celsius * (9 / 5) + 32;
//fahrenheit = celsius * (9/5) +32
fahrenheit = Math.floor(fahrenheit); 
//rounding using .floor
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);



