let str1 = "Hello"
let str2 = " World"
// console.log(str1 + str2);
// console.log(`this is demo for ${str1}`);

let s = new String("Jay Pandya")
console.log(s.toUpperCase()); //JAY PANDYA
console.log(s.length);        //10
console.log(s.charAt(5));     //a
console.log(s.indexOf('y'));  //2 

const news = s.substring(0,7)
console.log(news)             //Jay Pan

const news2 = s.slice(-5,3) //can take -ve values also
console.log(news2)

const space = "    heeello   "
console.log(space.trim()) //deletes whitespaces
console.log(space.includes("heeel")) //true