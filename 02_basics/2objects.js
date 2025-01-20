const sym = Symbol("key1") //SYMBOL

const JsUser = {
    name: "Jay",
    "full name": "Jay Pandya",
    [sym]: "keyyy1",
    age: 20,
    location: "Vadodara",
    isloggedin: false,
    email: "jay@google.com"
}

// console.log(JsUser.email);  //access
// console.log(JsUser["full name"]);
// console.log(JsUser[sym]);

JsUser.email = "jaypandya428@gmail.com" //update values
// Object.freeze(JsUser) //can make no more changes
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hellllooooooo");   
}

JsUser.greeting2 = function(){
    console.log(`Hellooo ${this.name}`);   
}

console.log(JsUser.greeting());  
console.log(JsUser.greeting2());
