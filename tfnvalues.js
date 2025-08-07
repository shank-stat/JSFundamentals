// What are Falsy values? 
//1. false
//2. Undefined - in boolean context. NaN in Numeric context
//3. null - in boolean context. 0 in Numeric context
//4. 0 [Zero]
//5. NaN [Not a Number]
//6. "" [empty string]

let val = NaN
if (val) {
console.log('Condition met.....');

} else { 
    console.log(`Given value of ${val} is a falsy value...`);
}

let val1 = 5 + undefined //Undefined in Numeric Context 
console.log(val1);

let val2 = null + null //null in Numeric Context
console.log(val2);