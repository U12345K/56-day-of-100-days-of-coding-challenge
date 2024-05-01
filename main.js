"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// task 1
let a = 1, b = 2;
console.log(++a);
console.log(b++);
console.log(a);
console.log(b);
console.log(b);
// task 2
let aA = 2;
let xX = 1 + (aA *= 2);
console.log(`the answer of let aA=2 is ${aA},and the answer of let xX=1+(aA*=2)is:5`);
// task 3
console.log(Number("" + 1) + 0);
console.log(Number("") - 1 + 0);
console.log(Number(true) + Number(false));
console.log(Number("3"));
console.log(Number("2") * Number("3"));
console.log("$" + 4 + 5);
console.log(Number("4") - 2);
console.log(Number("4px") - 2);
console.log(Number("-9") + 5);
console.log(Number("-9") - 5);
console.log(Number(null) + 1);
console.log(Number(undefined) + 1);
// task 4
let aAa = "1";
let bB = "2";
console.log(aAa + bB);
let newa = +1;
let newb = +2;
console.log(newa + newb);
let newA = 1;
let newB = 2;
console.log(+1 + +2);
