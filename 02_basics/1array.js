const myArr = [1,2,3,4,5]
const myHeroes = ["shaktimaan", "ironman", "drstrange"]

const myArr2 = new Array(5,10,15,20)

// console.log(myArr2[2]);
// myArr.push(4)
// console.log(myArr);

// const myn1 = myArr.slice(0,3)
// console.log(myArr);
// console.log(myn1); // 1,2,3
// const myn2 = myArr.splice(0,3) //manipulates original array
// console.log(myArr);
// console.log(myn2);  

const marvel = ["thor", "ironman", "drstrange"]
const dc = ["flash", "batman", "superman"]

// marvel.push(dc)     //PUSHES ARRAY AS AN ELEMENT
// console.log(marvel);  

// const newhero = marvel.concat(dc) //JOINS TWO ARRAY
// console.log(newhero);

// const allnew = [...marvel, ...dc] //SPREAD OPERATOR JS EACH ELEMENT KO SPREAD KRDEGA
// console.log(allnew);

const anarray = [1,2,3,4,[5,6,7],8,[9,[1,2,3]]]
const realarray = anarray.flat(Infinity) //CHUTA KRDEGA LOL 
console.log(realarray);

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));    //CONVERTS DIFF OBJECTS IN SINGLE ARRAY


