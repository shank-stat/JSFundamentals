//Variable Scoping
//let
let count = 0
if (true){
    let count = 10 ;
    console.log("The Value of Count inside IF block : ", count);
}

console.log("The Value of Count OUTSIDE IF block : ", count);

//Var
var count1 = 0
if (true){
    var count1 = 10 ;
    console.log("The Value of Count inside IF block : ", count1);
}

console.log("The Value of Count OUTSIDE IF block : ", count1);
