// Singleton
// Object.create


// Object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "asif",
    "full name": "asif hameed",
    [mySym]: "mykey1",
    age: 22,
    location: "Lahore",
    email: "asif@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Mnday", "Saturday"]
}

// console.log(jsUser["full name"])
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "asif@cc.com"
// Object.freeze(jsUser)
jsUser.email = "asif@tt.com"

// console.log(jsUser)

jsUser.greeting =  function(){
    console.log("Hello JS User")
}

jsUser.greetingTwo =  function(){
    console.log(`Hello JS User, ${this.email}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

myArray = ["a", "b"]
// console.log(myArray[1])