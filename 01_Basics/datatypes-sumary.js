// primitive value type
// 7 Types: String Number Boolean null undefined symbol BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 34444533355332444n

// non primitive/ Reference type
// Array, Object, function

const heros = ["asif", "ayesha", "perveen", "Hameed"]

let obj =
{
    name: "asif",
    age : 42,
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)
console.log(typeof anotherId)


// ++++++++++++++++++++++++++++++++++++

// Stack ( primitive / by value) Heap ( Non primitive/ by refrence)

let myYoutubename = "asifhameeddev"

let anothername = myYoutubename
anothername = "newValue"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    easypaesa: "03344038368"
}

let userTwo = userOne;

userTwo.email = "asif@google.com"

console.log(userOne.email)
console.log(userOne.email)