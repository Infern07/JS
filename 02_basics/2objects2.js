// const tinderuser = new Object() //singleton object
const tinderuser ={}

tinderuser.id = "abc"
tinderuser.name = "sam"
tinderuser.isloggedin = false
console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Jay",
            lastname: "Pandya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const obj4 = Object.assign({}, obj1, obj2, obj3) //combines objects
const obj4 = {...obj1, ...obj2, ...obj3} //spread op like in array
// console.log(obj4);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin')) //true

