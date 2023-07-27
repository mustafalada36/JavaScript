//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 
console.log(1+1+1+1+1 ,"Stars!")

//Whys use Template Literal in ES6
// console.log( "after
//             some code");
//It fails for multiline

let multiline = `This 
                 is the use of 
                multiline code`;
// let newline = "First
//                 Second 
//                 Third";
            
console.log(multiline);