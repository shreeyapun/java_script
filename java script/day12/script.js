//  ---------------loop----------------------
// let myName='shreeya';
// for (count=40; count<=50; count++){
// console.log(myName);
// }


// syntex=for ( )



// for ( let count=1;count<=100;count++){
//     console.log(count);
// // }

//  for(let number=100; number>=1;number--){
//     console.log(number);
//  }

 
//  for( let even=0;even<=100;even+=2){
//     console.log(even);
//  }
//  for(let odd=1 ;odd<=100;odd+=2){
//     console.log(odd);
//  }
// for (let Number=1;Number<=100;Number++){
//     if()
//     }
// }

// let userNumber=Number(prompt('enter number'));
// let UserNumber=Number(prompt('enter last number'));
// for ( count=userNumber;count<=UserNumber;count++){
//     if(count%2==1){
//     console.log(count);
// }
// }
// for (let count=1;count<=10;count++){
//     console.log(` 5*${count}=${5*count} `);
// }



let evenNumber=Number(prompt('enter a number'));
let oddNumber=Number(prompt('enter odd number'));
// let odd=1
// let even=0
let sum=1
// for ( count=evenNumber;count<=oddNumber;count++){
//     if (count%2==1){
//         console.log(count);
//     }
// }
// for (count=evenNumber;count<=oddNumber;count++){
//     if(count%2==0){
//         console.log(count);
//     }
// }
for(count=evenNumber;count<=oddNumber;count++){ 
    if(count%2==1)
    {
        sum=sum+count;
        console.log(`sum of odd number between ${evenNumber}and ${oddNumber}:${sum} `)
    }
}

    