// // -------assignmeent operator-----------
// //  if all variable value is same and need to write all together

// // shorthand opperator
// let  a=b=c=d=e=10;
// console.log(e);

// let name=first=second=55;
// console.log(second);

// // = ( assignment operator  ( value store)),==(equal to but can change data type into number) ,===(equal to but cannot compare while different data type)

// // -------compound operator------------
// let compoudOperaator= 12;
// console.log(compoudOperaator*=12);

// let nepaliCurrency=Number(prompt('enter a nepali currency'));
// console.log(nepaliCurrency/=136.47);

// let USD=Number(prompt('enter usd '));
// console.log(USD*=136.47);

// let userNumber=firstNumber=secondNumber=fifthNumber=Number(prompt('enter a number'));
// let numberUser=thirdNumber=fourthNumber=sixthNumber=Number(prompt('enter a second number'));

// console.log(userNumber+=numberUser);
// console.log(firstNumber*=thirdNumber);
// console.log(secondNumber-=fourthNumber);
// console.log(fifthNumber/=sixthNumber);
  

// // let a=b=c=d=Number(prompt('number'));
// let A=B=C=D=Number(prompt('number'));
// let E=F=G=H=Number(prompt('number'));
// console.log(A+=E);
// console.log(B-=F);
// console.log(C*=G);
// console.log(D/=H);


// ---------increment/decrement operators----------
//  ++ baneko 1+
// -- baneko 1-
// front ma ++ rakhe pre increement ho ani tesma value add garexi second variable ma store hunnxa
// back ma ++ rakhe postincrement ho ani tesma value add nabayi second variable ma store hunxa
let preIncrement=15;
let incrementPre=++preIncrement;
console.log(incrementPre);
console.log(preIncrement);

let postIncrement=15;
let incrementPost=postIncrement++;
console.log(postIncrement);
console.log(incrementPost);


let myNumber=20;
let secondNumber=100;
let result= ++myNumber + myNumber+ ++secondNumber;
console.log(result);

let muNumber=35;
let SecondNumber=100
console.log(++muNumber+ muNumber-- + --SecondNumber- SecondNumber--);
