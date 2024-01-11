
function sayMyName(){
    console.log("A")
    console.log("S")
    console.log("I")
    console.log("F")
}

// sayMyName()

function addTwoNumbers(number1, number2){
  let result = number1 + number2
  console.log("Asif") 
  return result;
    console.log("Asif") // will never execute
}

// addTwoNumbers(3,'4')
// addTwoNumbers(3,'a')
const result = addTwoNumbers(3,null)
// console.log("Result: " + result)

function loginUserMessage(username = "asif" ){

  // if(username === undefined){
  if(!username){
    console.log("Please enter username")
    return;
  }
   return `${username} just logged in`
}

// console.log(loginUserMessage('asif'))
console.log(loginUserMessage())

function calculatePrice(val1,val2, ...num1){
  return num1
}

console.log(calculatePrice(200,100,300,400))

const user = {
username: "asif",
price: 99
}

function handleObject(anyObject){
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)