let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);
let myCreatedDate = new Date(2023,4,3,5,3)
// console.log(myCreatedDate.toLocaleString())

myCreatedDate = new Date("01/14/2023")


 console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getMonth()+1)
console.log(` Today the date is ${newDate.getDay()} and month is ${newDate.getMonth()+1}`)

newDate.toLocaleString('default', {
 weekday: "long"

})