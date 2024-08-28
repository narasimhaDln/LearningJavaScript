let fs = require("fs");
let data = fs.readFileSync("input.txt", "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// if, else if , else
// let paymentType = 2
// if (paymentType === 'creditcard') {
//   console.log("do something related to creditcard");
// } else if (paymentType == "debit") {
//   console.log("something related to creditcard");
// } else if (paymentType === '2') {
//   console.log('giftcard payment')
// } else {
//   console.log('invliad payment type show popup invalid data entered')
// let num = 12;
//     if(num%10===0){
//       console.log('zero')
//     }
//     else if (num%10===1){
//       console.log('one')
//     }
//     else if(num%10===2){
//       console.log('two')
//     }
    // else if(num%10===3){
    //   console.log('three')
    // }
    // else if (num%10===4){
    //   console.log('four')
    // }
    // else if (num%10===5){
    //   console.log('five')
    // }
    // else if (num%10===6){
    //   console.log('six')
    // }




// if (k < 10 && k > 9) {
//   console.log("identified positive number")
// }
// else {
//   console.log('invalid positive number')
// }

// && 
//   true, true = true 
// false true = false
// true false = false
// false false = false

//   || 
//   true true = true 
// false true = true
// true false = true 
// false false = false

for (let i = 1; i <= 5; i++){
  console.log(i);
}