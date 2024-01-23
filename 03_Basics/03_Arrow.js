const user = {
username: "asif",
price: 99,
welcomeMessage: function(){
  console.log(`${this.username}, Welcome to website`)
//   console.log(this)
 }
}

// user.welcomeMessage()
// user.username = "Kashif"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "asif"
//     // console.log(this)
//     console.log(this.username)
// }
//chai()

// const chai = function(){
//   let username = "asif"
//   console.log(this.username)
// }

const chai = () => {
  let username = "asif"
  console.log(this)
}
chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username : "asif"});

const myArr = [1,2,3,4,5]

myArr.array.forEach(() => ());


console.log(addTwo(3,4))