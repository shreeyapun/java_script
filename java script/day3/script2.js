// data type in java script

// string
// number, integer,float
// bigint
// boolean
// null(NO VALUE)
// symbol
// UNDEFINED(NO VALUE)


// Collection of valuable information( partially true)
// RAW FACT AND FIGURES
// DATA IS ANYTHING THAT CAN BE RECORDED AND CAPTURED
// DATA + SOME PROCESSING = INFORMATION

// DATA TYPE -> DESCRIBES WHAT TYPE OF DATA WE ARE RECORDING
// 1> STRING  =  IT IS A COMBINATION OF CHARACTERS ,WRAPPED BY SINGLE OR DOUBLE QOUTES{' 'OR " "}

// typeof (gives what type of value variable holds)
 let myfirstname='hashasha';

 let lastname=prompt('enter name')

 console.log(typeof myfirstname);
 console.log(typeof lastname);

// number(float -> 1.2 , 1.3)
// integer-> 100,200

let number=10.1; //(more generic data type ->number)
console.log(typeof number);

console.log( 0.1 + 0.2);

let mynumber = 100719925474099572; //(max)
let myminimumnumber=  -100000969965669999896;//min
console.log(myminimumnumber);
console.log(mynumber);

let binary=0b1010; //binary = b
console.log(binary);
let octal=0o10110;//octal =o
 console.log(octal);

 let hex=0xe; //hex= (0-9 A B C D E F)
 console.log(hex);          




//  3> big int
let bigint =1020200021205050n;
console.log(bigint);


let BigInt= 100101.001000000101;
console.log(BigInt);

// concole.log(20n+52) error both must be same type.
 
// BOOLEAN
//  either yes or no ,true or false .
 let isMarried=true;
 let canVote=false;
//  more when we get into if else...

let variable;
console.log(variable); //value is not defined.
