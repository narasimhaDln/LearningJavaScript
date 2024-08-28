let fs = require("fs");
let data = fs.readFileSync("input.txt", "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// loop
// initial value declare
// condition
//increment or decrement

// for (let i = 0; i < 5; i++) // i = 5 ; 5<5
// console.log(2, ' * ' ,i , ' = ', i*2)  // 2 * 4 = 8// i = 5
// //}

// sum n natural numn-bers
//et first = parseInt(readLine());
//let second = parseInt(readLine());//2*i=i*2
//let third = parseInt(readLine());
//for (let i = 0; i < 11; i++) {
  //console.log(first, " * ", i, " = ", i * first);

//sum of n natural numbers
/*number = parseInt(readLine())//num=5
let sum = 0;//sum =0
for (let i = 0; i <= number ; i ++ ){//i=2,1<5
  sum = sum + i//sum = 0+1=1,i=2
}
// console.log(sum)*/
// for (let number = 1; number<=7; number++){
//   console.log(number);
// }
// console.log(!(4<=4)||(7==7))&&((2>3)||(5<=5))
// let i = 5;
// let j = 10;

// for (let i = 0; i < 5; i++){
//   let bag = "";
//   for (let j = 9; j < 10; j--){
//     let bag = bag +"*";
//   }
//   console.log(bag);
// }

let num = parseInt(readLine());
for (let i = 0; i <= num; i++){
  console.log(num * i);
}


