// Ternary Operator
// Ternary - ?
// <expression> ? "val1" : "val2"

// Set log level for different run environment
// Basic Use - to use in Choosing and setting a Log level during Test Automation
let runner = "cloud"
// let loglevel = runner == "local"? "Info" : "Error"
// console.log(loglevel);

// Advanced 
let loglevel = runner == "local"? "Info" : runner === "cloud"? "Silent" : "Error"
console.log(loglevel);
