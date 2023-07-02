//1-dars Creating typescript file
// console.log("Hello World");
//2-dars Data Types
//Typescriptdagi malumot turlari JSniki bilan bir xil,
//faqat o'zgaruvchi qaysi typega tegishli ekanligini,
//oldindan aytib o'tish kerak.
var a = 120;
var b = "alisher";
var c = true || false;
var d = null;
var e = undefined;
var f = {};
//Yoki o'zgaruvchi ochib uni qaysi typega tegishli,
//ekanligini aytib qo'yib keyinchalik unga type bo'yicha,
//qiymatlar berib ketish mumkin.
var num;
num = 1;
num = 2;
num = 3;
//any malumot turi bu aniq bir malumot turi emas,
//shuning uchun u hoxlangan malumot turiga aylana oladi.
var h;
h = true;
h = 120;
h = "alisher";
h = null;
h = undefined;
h = {};
//Object in typescript
var g = {
    name: "alisher",
    age: 12,
};
//3-dars
//Function decloration in typescript
function mul(x, y) {
    return Math.pow(x, y);
}
//The function in JS
//  function mul(x, y){
//      return x ** y
//  }
//Function expression in typescript
var add = function (x, y) {
    return x + y;
};
//The function in JS
//  const add = (x, y) => {
//      return x + y
//  }
//Function array in typescript
var div = function (x, y) { return x / y; };
//The function in JS
//  const div = (x, y) => x + y;
