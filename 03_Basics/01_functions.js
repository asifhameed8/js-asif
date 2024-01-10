
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