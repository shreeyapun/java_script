// ------operator and precedence and assosiativiity-----
console.log(45+58-41);

// not using BDMAS
console.log(4*[54-12]);
 variable = 20;
 variable=variable+2+variable++;
//  1 0 0
// 0 1 0
// -------
//  1 1 0 = 6 (used in 5th sem networking)

// unary operator (only one)
// bianry operator(two)

 

//-------------------CONDITIONAL STATEMENTS-----------------------

// if else
// for loop
// while loop
// // do while loop (+3 more after we complete array session.......)
   

// syntex: if (condition){ true case} else {false case};




// let oneNumber=Number(prompt('enter a number'));
// let twoNumber=Number(prompt('enter a two number'));
// if( oneNumber>twoNumber ) {console.log('twonumber is smallest');}
// else{ console.log('oneNumber is smallest');}

// let newYear=Number(prompt('enter a year'));
// result=newYear%4;
// if  (result==0) {console.log('result is leap year');}
// else {console.log('result is not leap year');}



// let newNumber=Number(prompt('enter a new number'));
// concusion=newNumber%5;
// if (concusion==0)
//     {console.log('newNumber is divisible by 5');}
// else{console.log('newNumber is not divisible by 5');}


// let oneProduct=Number(prompt('enter one prize'));
// let twoProduct=Number(prompt('enter two price'));
// let threeProduct=Number(prompt('enter three price'));
// let fourProduct=Number(prompt('enter a four price'));
// let fiveProduct=Number(prompt('enter five price'));
// let conclusion=oneProduct+twoProduct+threeProduct+fourProduct+fiveProduct;
// if (conclusion>=1000) {console.log('give 5% discount');}
// else{console.log('not eligible for discount');}

// let alphabet=prompt('enter a alphabet');
// if (alphabet=="a"||alphabet=="e"||alphabet=="i"||alphabet=="o"||alphabet=="u") {console.log('it is vowel');}
// else{console.log('it is consonant');}

// const WEEKEND=prompt('enter a day');
// if 
// ( WEEKEND =="saturday"||WEEKEND=='sunday') {console.log('it is a weekend');}
// else{console.log('it is not weekend');}

// let time=Number(prompt('enter a time'));
// if (time>12) {console.log('pm');}
// else{console.log('am');}

// let height=Number(prompt('enter a height'));
// let weight=Number(prompt('enter a weight'));
// let determine=weight/height*height;
// if(determine>=60){console.log('you are not fit');}
// else{console.log('you are fit');}


let symbol=prompt('enter a symbol');
if (symbol=='!'||symbol=='@'||symbol=="#"||symbol=='$'||symbol=='%'||symbol=='^'||symbol=='&'||symbol=='*'||symbol=='('||symbol==')'){
    console.log('it is ok');
} else{console.log('its no ok');}
