// SYMBOL
// const and let 
const Mysymbol =Symbol('abc');
console.log(Mysymbol);  //used to generate unique key (in objects) , will cover later
console.log(typeof Mysymbol);

//NULL(no value)

//why typeof null is object in javascript
 let Mynullvariable =null;
 console.log(Mynullvariable);
 console.log(typeof Mynullvariable); //biggest bug in js world
  
 // TYPE CONVERSION
 let Mystring= '10';
 console.log(Mystring +10); //+ is an operator polymorphism ( poly-> many  morphism->form)

 let converted=Number(Mystring);
 console.log(converted + 10);

 //some tweaks (edge cases) while converting to number type.


 //true and false can be valid (1,0)  alphabet can't be valid.
let edge=Number('8') 
console.log(edge);
console.log(-true/false);


// BOOLEAN (more trickier)  
// string case
// empty''or " " is false otherwise true
let trick=Boolean("");
console.log(trick);


// number case
// number boolean ->any non zero number is true. eg 1000 or 0.001
let tricknumber=Boolean(0.00);
console.log(tricknumber);

// conversion to string type from different other types.
let stringvalue=String('sasasa,hchs'); //all are possible except bigint..
console.log(stringvalue);

//practice problem
console.log(true+1);
//type coertion
console.log("100"-50);
console.log("100"+200);
