const myArr = [1,2,3,4,5]
const myHeroes = ["shaktimaan", "ironman", "drstrange"]

const myArr2 = new Array(5,10,15,20)

// console.log(myArr2[2]);
// myArr.push(4)
// console.log(myArr);

const myn1 = myArr.slice(0,3)
console.log(myArr);
console.log(myn1); // 1,2,3
const myn2 = myArr.splice(0,3) //manipulates original array
console.log(myArr);
console.log(myn2);

