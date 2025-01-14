let score = "100";
console.log(typeof score); // string
let NumberInValue = Number(score);
console.log(typeof NumberInValue); // number

let score2 = "100abc";
console.log(typeof score2); // string
let varr = Number(score2);
console.log(typeof varr); // Number
console.log(varr); // NaN

// ************** Operations **************

let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log(str3) // hello world

console.log("1"+2) // 12;
console.log(1+2) // 3;
console.log(1+"2") // 12;
console.log("1"+2+3) // 123;
console.log(1+2+"3") // 33;


