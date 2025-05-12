// // ----  bitwise operator-----

// console.log(3&1);
// // 1 1
// // 0 1
// // -----
// // 0 1 =>1
// console.log(3|1);



// // right shift 
// console.log(4>>1);
// // 0100
// // 0010

// //left shifft
// console.log(3<<1);   
// // 000011
// // 000110

// 0 even ,1 odd last binary digit

// -------ternary  operator------
// syntax : condition ? what if true: if false 


// let firstNumber= Number(prompt('enter a number'));
// let secondNumber=Number(prompt('ener a two number'));
// console.log(firstNumber>secondNumber ? `${firstNumber} is greater than ${secondNumber}` : `${firstNumber} is less than ${secondNumber}` )//interpolation
// alert(firstNumber>secondNumber ? `${firstNumber} is greater than ${secondNumber}` : `${firstNumber} is less than ${secondNumber}` ) 
// //alert baneko output show garxa 



// const USERNAME='shreeya';
// const PASSWORD='2580';
//   let userName=prompt('enter a username');
//   let passWord=prompt('enter a password');
//   console.log(USERNAME==userName && PASSWORD == passWord? "you are loged in":" incorrect ")


//   let ageNumber=Number(prompt('enter a age number'));
// //   console.log(ageNumber>=18 && ageNumber<40 ? "you are valid user for voting" :" you are too early or too old for valid"); 



//   let firstNumber=Number(prompt('enter a number'));
//   let secondNumber=Number(prompt('enter a two number'));
//   console.log( firstNumber/secondNumber>10 || firstNumber/secondNumber<-1 ? 'result is greater than 10 or result is negative': 'result is out of scope');



// let firstNumber=Number(prompt('enter a number'));
// let result = firstNumber%2
// console.log(result==0? 'result is even':'result is odd');



// basic ternary operator assignment//
//check if a number is even or odd
 let aNumber= Number(prompt('enter a number'));
 let result =aNumber%2
 console.log(result==0? 'result is even ':'result is odd');

// determine the greater of two number
let oneNumber=Number(prompt('enter a number'));
let twoNumber=Number(prompt('enter two number'));
let determine=oneNumber-twoNumber;
console.log(determine>0 ? 'oneNumber is greater':'twoNumber is greater' );
// find the smallest of two number
let firstNumber=Number(prompt('enter a first number'));
let secondNumber=Number(prompt('enter a second number'));
let find = firstNumber-secondNumber;
console.log(find<0 ? 'first is smallest': 'second is smallest');
// check if number is postive , negetive or zero
let someNumber=Number(prompt('enter a some number'));
console.log(someNumber>0 ? 'number is positve': 'number is negetive or zero');


// check if a number is divisible by 5
let anyNumber=Number(prompt('enter any number '));
let AnyNumber= anyNumber%5;
console.log(AnyNumber==0  ? 'number is divisible':'number isnt divisible');


// assign "pass" or fail based on marks
let manyNumber=Number(prompt('enter mark number'));
console.log(manyNumber>=45? 'pass':'fail');

// assign grade based on score (eg a if >90 else b)
// check if a person is eligible to vote (age>=18)
let ageNumber=Number(prompt('enter a age'));
console.log(ageNumber>=18? 'a person is eligible to vote':'a person is not eligible to vote');

// determine if a year is a leap year(basic check)
let leapYear= Number(prompt('enter a year'));
let year=leapYear%4;
console.log(year==0 ? 'it is a leap year':'it is not a leap year');

// check if a string is empty or not
let string=prompt('string');
console.log(string==""? 'empty':'not empty');

// assign "eligible or not eligible for scholarship"(based on passing all 5 subject)
let math=Number(prompt('math marks'));
let science=Number(prompt('science marks'));
let social=Number(prompt('social marks'));
let english=Number(prompt('english marks'));
let nepali=Number(prompt('nepali marks'));
console.log(math>=40&& science>=40&& social>=40 && english>=40 && nepali>=40 ?  'eligible for scholarship':'not eligible for scholarship');

// check if username and password are correct (simple string compression)
const USERNAME="shreeya";
let username=prompt('username');
const PASSWORD="Ghar";

let password=prompt('password');
console.log(username==USERNAME&&password==PASSWORD? 'username and password are correct':'username and password are not correct');


// assign day or night based on hour (24 hour format)
let hour=Number(prompt('enter hour'));
console.log(hour<=12 ? 'day':'night');

// set result to pass or fail based on average marks
let average=Number(prompt('average number'));
console.log(average>=40? 'pass':'fail');

// check if a number is prime or not (using ternary inside a loop or function)
let primeNumber=Number(prompt('prime number'));
// console.log(primeNumber)

