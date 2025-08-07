// Logical Operators
// Logical - &&, ||, !
// 2 Main Perpuse - In conditional statements and to have a default value

// && - AND Operator
let val = "Monday"
// console.log(typeof (typeof val));

if (typeof val === "string" && val.length>1) {
    console.log("It is a String");
} else {
    console.log("It is NOT a String");false;
}

// || - OR Operator
if (typeof val === "number" || val.length>10) {
    console.log("It is a String");
} else {
    console.log("It is NOT a String");false;
}

// ! - NOT Operator
let fname = "Shank"
let lname ="Chang"

if (!fname || !lname) {
    console.log("NOT Valid Name Details");
} else {
        console.log(fname,lname);
}

// Logical Operator OR - Default Value
let targetBrowser = "Edge"

let browser = targetBrowser || "Chrome"
console.log(browser);