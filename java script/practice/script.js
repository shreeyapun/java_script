// //  decision making

// // 1
// let electricityBill = Number(prompt('enter a bil'));
// if (electricityBill >= 0 && electricityBill < 100) {
//     console.log('rs 1.5 per unit');
// } else if (electricityBill > 100 && electricityBill < 300) {
//     console.log('rs 2 per unit');
// } else {
//     console.log('rs 3 per unit');
// }
// // 2
// let internetData = Number(prompt('enter  a usage'));
// if (internetData >= 0 && internetData < 50) {
//     console.log('normal usage');
// } else if (internetData >= 50 && internetData < 90) {
//     console.log('warning');
// } else {
//     console.log('over limit');
// }
// //  3
// let monthCheck = Number(prompt('enter  a month'));
// if (monthCheck >=1 && monthCheck <=2) {
//     console.log('winter');
// } else if (monthCheck >= 3 && monthCheck <= 5) {
//     console.log('spring');
// } else if (monthCheck > 5 && monthCheck <= 8) {
//     console.log('summer');
// }
// else if(monthCheck==12){
//     console.log('winter')
// } else {
//     console.log('autumn');
// }

// // 4
// let bankInterest = Number(prompt('enter a year'));
// if (bankInterest >= 0 && bankInterest < 1) {
//     console.log('5% interest');
// } else if (bankInterest >= 1 && bankInterest < 3) {
//     console.log('6.5% interest');
// } else {
//     console.log('7.5% interest');

// }
//  // 5
//  let movirRating=Number(prompt('enter a rating'));
// if (movirRating>=0 && movirRating<5){
//     console.log('poor');
// } else if (movirRating>5 && movirRating<7.9){
//     console.log('average');
// } else if (movirRating>7.9 && movirRating<=10){
//     console.log('excellent');
// } else{
//     console.log('invalid');
// }
// // 6
// let loanNumber=Number(prompt('enter a loan'));
// if (loanNumber>0 && loanNumber<750){
//     console.log('approved');
// } else if(loanNumber>750 &&  loanNumber< 600){
//     console.log('review');
// } else {
//     console.log('rejected');
// }
// // 7
// let shippingCharge=Number(prompt('enter a number'));
// if (shippingCharge<10){
//     console.log('free');
// } else if(shippingCharge>10 && shippingCharge< 50){
//     console.log('rs 50');
// } else {
//     console.log(' rs 100');
// }
// // 8
// let studentMarks=Number(prompt('enter a mark'));
// if (studentMarks>90&& studentMarks<100){
//     console.log('excellent');
// } else if( studentMarks < 90 && studentMarks>70){
//     console.log('good');
// } else if (studentMarks<70 && studentMarks>50){
//     console.log('average');
// } else {
//     console.log('need a improvment');
// }
// // 9
// let typingSpeed=Number(prompt('enter a number'));
// if (typingSpeed>=60){
//     console.log('fast');
// } else if (typingSpeed>40 && typingSpeed<60){
//     console.log('average');
// } else {
//     console.log('slow');
// }
// // 10 
// let languageLevel=Number(prompt('enter a number'));
// if (languageLevel>=85){
//     console.log('advanced');
// } else if( languageLevel>60 && languageLevel< 85){
//     console.log('intermediate');
// } else { 
//     console.log('beginner');
// }
// // 11
//  let incometax=Number(prompt('enter a income'));
//  if (incometax<2.5){
//     console.log('no tax');
//  } else if (incometax>2.5 && incometax<5){
//     console.log('5%');
//  } else{
//     console.log('30%')
//  }
//  //12
//  let waterQuality=Number(prompt('enter a  index'));
//  if (waterQuality>=0&&waterQuality<=50){
//     console.log('good');
//  } else if(waterQuality>=51 && waterQuality<=100){
//     console.log('moderate');
//  } else if(waterQuality>100 && waterQuality<200){
//     console.log('unhealthy');
//  } else {
//     console.log('dangerous');
//  }
// //  13
//  let votingEligible=Number(prompt('enter age'));
//  if(votingEligible<18){
//     console.log('not eligible');
//  } else if(votingEligible>=18 && votingEligible<60){
//     console.log('eligible');
//  } else {
//     console.log('senior voter');
//  }
// //  14
//  let appRating=Number(prompt('enter  a rate'));
//  if(appRating>4.5 && appRating<5){
//     console.log('excellent');
//  } else if(appRating>3 && appRating<4.4){
//     console.log('good');
//  } else {
//     console.log('poor');
//  }
// //  15
// let coffeeSeletor=Number(prompt('enter a number'));
// if (coffeeSeletor==1){
//     console.log('light');
// } else if(coffeeSeletor==2){
//     console.log('medium');
// } else if(coffeeSeletor==3){
//     console.log('strong');
// } else {
//     console.log('invalid');
// }
// // 16
// let busFare=Number(prompt('enter age'));
// if (busFare<5){
//     console.log('free');
// } else if(busFare>5 && busFare<18){
//     console.log('half');
// } else { 
//     console.log('full');
// }
// // 17
// let type=Number(prompt('enter number'));
// if (type==1){
//     console.log('basic');
// } else if(type==2){
//     console.log('standard');
// } else if(type==3){
//     console.log('hard');
// } else { 
//     console.log('invalid option');
// }
// // 18
// let mobile=Number(prompt('enter number'));
// if (mobile<20){
//     console.log('low');
// } else if(mobile>20 && mobile<80){
//     console.log('normal');
// } else {
//     console.log('high');
// } 
// // 19
// let cPu=Number(prompt('enter temp'));
// if (cPu<50){
//     console.log('safe');
// } else if(cPu>50 && cPu<75){
//     console.log('warm');
// } else { 
//     console.log('danger');

// }
// // 20
// let bodyTemp=Number(prompt('enter a number'));
// if (bodyTemp<36){
//     console.log('low');
// } else if(bodyTemp>36 && bodyTemp<37.5){
//     console.log('normal');
// } else {
//     console.log('fever');
// }

// // 23
// let online=Number(prompt('enter order'));
// if (online==0){
//     console.log('ordered');
// } else if(online==1){
//     console.log('packed');
// } else if(online==2){
//     console.log('delivered');
// } else{
//     console.log('invalid status');
// }
// // 24
// let version=Number(prompt('enter version'));
// if(version<2){
//     console.log('oudated');
// } else if(version>2 && version<3){
//     console.log('compatible');
// } else {
//     console.log('beta feature required');
// }
// // 25
// let licence=Number(prompt('enter age'));
// if (licence<18){
//     console.log('ineligible');
// } else if( licence>18 && licence<65){
//     console.log('eligible');
// } else{
//     console.log('renewal required');
// }
// // 26
// let fuel=Number(prommpt('enter number'));
// if (fuel>=20){
//     console.log('excellent');
// } else if(fuel>15 && fuel<20){
//     console.log('good');
// } else {
//     console.log('poor');
// }
// // 27
// let signal=Number(prompt('enter a number'));
// if (signal>=0 && signal<=1){
//     console.log('weak');
// } else if(signal<=3&& signal>=2){
//     console.log('medium');
// } else{
//     console.log('strong');
// } 
// // 28
// let room=Number(prompt('enter number'));
// if (room<20){
//     console.log('small');
// } else if (room >20 && room<=40){
//     console.log('medium');
// } else {
//     console.log('large');
// }
// 29
// let marathon= Number(prompt('enter a number'));
// if (marathon<3){
//     console.log('elite');
// } else if (marathon>3 && marathon<=5){
//     console.log('average');
// } else {
//     console.log('slow');
// }
// // 30
// let planet=Number(prompt('enter a time'));
// if (planet<2000){
//     console.log('dwarf');
// } else if (planet>2000 && planet< 7000){
//     console.log('terrestrial');
// } else {
//     console.log('gas giant');
// }
// // 31
// let review=Number(prompt('enter a star'));
// if (review>=5){
//     console.log('excellent');
// } else if(review>=3 && review<4){
//     console.log('satisfactory');
// } else {
//     console.log('poor');
// }
// 32
// let battery=Number(prompt('enter a number'));
// if (battery<=20){
//     console.log('power saving');
// } else if(battery>20 && battery<50){
//     console.log('normal');
//  } else {
//     console.log('charging complete');
// }
// // 33
// let interNet=Number(prompt('enter a speed'));
// if(interNet>100){
//     console.log9('fast');
// } else if(interNet>30 && interNet){
//     console.log('moderate');
// } else {
//     console.log('slow');
// }





// date 26



//
// A
// let electricity=Number(prompt('enter a number'));
// for( electricityNumber=electricity ; electricityNumber<=electricity; electricityNumber++ ) {
// if (electricity<=100){console.log(electricityNumber*1.5);} else if (electricity<300){
//     console.log(electricityNumber*2);
// } else {console.log(electrictyNumber*3);}
// }
// B
// let internet=Number(prompt('enter a number'));
// for ( data=internet; data<=internet; data ++){
//     if (data<50 && data>=0){
//     console.log('it is a norml usage');
//     }
//      else  if  (data>=50 && data<=90){console.log('it is warning');

//      }  else {console.log('it is over limit');}
//     }
//  C  
// let bank=Number(prompt('enter a interest'));
// for (interst=bank ; interst<=bank ; interst++){
//     if (interst<1){
//         console.log('5%');
//     } else if (interst>1 && interst<=3){
//         console.log('6.5%');
//     } else {console.log('7.5%');}
// }
// D 
// let movies=Number(prompt('enter a rate'));
// for(rate=movies;rate<=movies;rate++){
//     if (rate>=8 && rate<=10){
//         console.log('excellent');
//     } else if (rate>=5 && rate<=7.9){
//         console.log('average');
//     } else {console.log('poor');}
// } 

// E 
// let loan =Number(prompt('enter a money'));
// for (score=loan; score<=loan; score++){
//     if (score>750){
//         console.log('approved');
//     } else if (score>=600 && score<=750){
//         console.log('review');
//     } else {console.log ('rejected');}
// }

// F 
// let charges=Number(prompt('enter a distance'));
// for (ship=charges;ship<=charges;ship++){
//     if (ship<10){
//         console.log('free');
//     } else if (ship >10 && ship<=50){
//         console.log('rs 50');
//     } else {console.log('rs 100');}
// }

//  G 
// let students=Number(prompt('enter a gpa'));
// for (perform=students;perform<=students;perform++){
//     if (perform>90){
//         console.log('excellent');
//     } else if (perform>70 && perform<=90){
//         console.log('good');
//     } else if (perform>50 && perform<=69){
//         console.log('average');
//     } else {
//         console.llog('need innprovement');
//     }
// }

// H 
// let type=Number(prompt('enter a speed'));
// for (speed=type;speed<=type;speed++){
//     if (speed>60){
//         console.log('fast');
//     } else if (speed>=40 && speed <=60){
//         console.log('average');
//     } else {console.log('slow');}
// }

// I 
// let level=Number(prompt('enter a test'));
// for (test=level;test<=level;test++){
//     if(test>=85){
//         console.log('advanced');

//     } else if(test>60&& test<=84){
//         console.log('intermediate');
//     } else {console.log('beginner');}
// }

// J 
// let tax=Number(prompt('enter a income'));
// for(income=tax;income<=tax;income++){
//     if (income<2.5){
//         console.log('no tax');
//     } else if (income>2.5 &&  income<=5){
//         console.log('5%');
//     } else if (income>5 && income<=10){
//         console.log('20%');
//     } else{
//         console.log('30%');
//     }
// }

// K 
// let water=Number(prompt('enter a quality'));
// for(quality=water;quality<=water;quality++){
//     if (quality>=0 && quality<=50){
//         console.log('good'); 
//     } else if(quality>=51&& quality<=100){
//         console.log('moderate');
//     } else if(quality>=101&& quality<=200){
//         console.log('unhealthy');
//     } else {
//         console.log('dangerous');
//     }
// }

// L 
// let vote=Number(prompt('enter age'));
// for (age=vote;age<=vote;age++){
//     if (age<18){
//         console.log('not eligible');
//     } else if(age>18 && age<60){
//         console.log('eligible');
//     }  else {
//         console.log('senior voter');
//     }
// }

// M 
// let app=Number(prompt('enter a rate'));
// for (rate=app;rate<=app;rate++){
//     if(rate>4.5&& rate<=5){
//         console.log('excellent');
//     } else if (rate>3 && rate<=4.4){
//         console.log('good');
//     } else{
//         console.log('poor');
//     }
// }
// N 
// let select=Number(prompt('enter a coffee'));
// for (coffee=select;coffee<=select;coffee++){
//     if (coffee==1){
//         console.log('light');
//     } else if (coffee==2){
//         console.log('medium');
//     } else if (coffee==3){
//         console.log('strong');
//     } else{
//         console.log('invalid');
//     }
// } 

// O 
// let  bus=Number(prompt('enter a age'));
// for (age=bus;age<=bus;age++){
//     if (age<5){
//         console.log('basic');
//     } else if (age>5&& age<=18){
//         console.log('half');
//     } else {
//         console.log('full');
//     }
// }

// P 
// let sub=Number(prompt('enter a type'));
// for (type=sub; type<=sub;type++){
//     if (type==1){
//         console.log('basic');
//     } else if (type==2){
//         console.log('standard');
//     } else  if (type==3){
//         console.log('premium');
//     } else {
// console.log('unknown);}
// }

//  Q 
// let battery=Number(prompt('enter a number'));
// for (level=battery;level<=battery;level++){
//     if(level<=20){
//         console.log('low');
//     } else if (level>20 && level<=80){
//         console.log('normal');
//     } else {
//         console.log('high');
//     }
// }

// R 
// let  monitor=Number(prompt('enter a cpu'));
// for (cpu=monitor;cpu<=monitor;cpu++){
//     if (cpu<=36){
//         console.log('safe');
//     } else if (cpu>36&& cpu<75){
//         console.log('warm');
//     } else{
//         console.log('danger');
//     }
// }

// S 
// let body=Number(prompt('enter a temp'));
// for (temp=body;temp<=body;temp++){
//     if (temp<=36){
//         console.log('low');
//     } else if (temp>36&& temp<37.5){
//         console.log('normal');
//     } else {
//         console.log('fever');
//     }
// }

//  T 
// let order=Number(prompt('enter a code'));
// for (online=order;online<=order;online++){
//     if (online==0){
//         console.log('ordered');
//     } else if(online==1){
//         console.log('packed');
//     } else if (online==2){
//         console.log('shipped');
//     } else {
//         console.log('invalid status');
//     }
// }

// U 
// let version=Number(prompt('enter a ver'));
// for (soft=version;soft<=version;soft++){
//     if (soft<2.0){
//         console.log('outdated');
//     } else if(soft>2.0 && soft<=3.0){
//         console.log('compatible');
//     } else{
//         console.log('beta feature required');
//     }
// }

// V 
// let age=Number(prompt('enter a age'));
// for (num=age;num<=age;num++){
//     if (num<18){
//         console.log('ineligible');
//     } else if( num>=18&& num<=65){
//         console.log('eligible');
//     } else {
//         console.log('renewal required');
//     }
// }

// W
// let fuel=Number(prompt('km'));
// for(km=fuel;km<=fuel;km++){
//     if (km>20){
//           console.log( 'excellent')
//     } else if(km<=20  && km>15){
//         console.log('good');
//     } else {
//         console.log('poor');
//     }} 

// X 
// let signal=Number(prompt('enter a num'));
// for (bars=signal;bars<=signal;bars++){
//     if (bars<=4 && bars>=5){
//         console.log('strong');
//     } else if(bars>=2&& bars<=3){
//         console.log('medium');

//     } else {
//         console.log('weak');
//     }
// }

// Y 
// let room=Number(prompt('enter a room'));
// for (size=room;size<=room;size++){
//     if ( size<20){
//         console.log('small');
//     } else if(size>20 && size<=40){
//         console.log('medium');
//     } else {
//         console.log('large');
//     }
// }

// Z
// let marathon =Number(prompt('enter a time'));
// for(time=marathon; time<=marathon; time++){
//     if (time<3){
//         console.log('elite');
//     } else if ( time>=3 && time<=5){
//         console.log('average');
//     } else {
//         console.log('slow')
//     }
// }

// 1
// let exam=Number(prompt('enter online'));
// for (online=exam ; online<=exam ; online++){
//     if (online>80){
//         console.log('passed with distination');
//     } else if (online>=50 && online<=80){
//         console.log('passed');
//     } else {
//         console.log('failed');365
//     }
// }

// 2  
// let laptop=Number(prompt('enter a battery'));
// for(batt=laptop;batt<=laptop;batt++){
//     if (batt>90){
//         console.log('excellent');
//     } else if (batt>60 && batt<=90){
//         console.log('good');
//     } else {
//         console.log('poor');
//     }
// }
 
// 3
// let level=Number(prompt('age'));
// for (age=level;age<=level;age++){
//     if (age<6){
//         console.log('insufficient');}
//         else if (age>6 && age<=8){
//             console.log('ideal');
//         }  else {
//             console.log('excessive');
//         }  
//     } 

 
