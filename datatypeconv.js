// Data Type Conversion - using inbuild functions
let val1 = "5"
let val2 = "5.5"
let val3 = 5.5

//1. parseInt() - string to a number
parseInt(val1)
console.log(`The type of str is : ${typeof(parseInt(val1))}`);

//2. parseFloat() - string to a number with decimals
console.log(`The type of str is : ${typeof(parseInt(val2))}`);

//3. unary plus operator -  convert into number
console.log(`The type of str is : ${typeof(+(val1))}`);

//4. toString () - convert to string
console.log(`The type of str is : ${typeof(toString(val3))}`);


