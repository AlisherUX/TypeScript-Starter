"use strict";
//1-dars Creating typescript file
// console.log("Hello World");
// console.log("Alisher");
//2-dars Data Types
//Typescriptdagi malumot turlari JSniki bilan bir xil,
//faqat o'zgaruvchi qaysi typega tegishli ekanligini,
//oldindan aytib o'tish kerak.
let a = 120;
let b = "alisher";
let c = true || false;
let d = null;
let e = undefined;
let f = {};
//Yoki o'zgaruvchi ochib uni qaysi typega tegishli,
//ekanligini aytib qo'yib keyinchalik unga type bo'yicha,
//qiymatlar berib ketish mumkin.
let num;
num = 1;
num = 2;
num = 3;
//any malumot turi bu aniq bir malumot turi emas,
//shuning uchun u hoxlangan malumot turiga aylana oladi.
let h;
h = true;
h = 120;
h = "alisher";
h = null;
h = undefined;
h = {};
//Object in typescript
let g = {
    name: "alisher",
    age: 12,
};
//3-dars
//Function decloration in typescript
function mul(x, y) {
    return x ** y;
}
//The function in JS
//  function mul(x, y){
//      return x ** y
//  }
//Function expression in typescript
const add = (x, y) => {
    return x + y;
};
//The function in JS
//  const add = (x, y) => {
//      return x + y
//  }
//Function array in typescript
const div = (x, y) => x / y;
//The function in JS
//  const div = (x, y) => x + y;
//# sourceMappingURL=app.js.map