// const tinderUser = new Object(); // singleton
const tinderUser = {} // non singlton
tinderUser.id = "123abcd"
tinderUser.name = "kdasif"
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
   
    email: "some@gmail.com",
    fullname: {
       userfullname: {
        firstname : "Asif",
        lastname: "Hameed"
       }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj4 = { 5: "c", 6: "d"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1,obj2, obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(Object.hasOwnProperty('name'))

const course = {
 coursename : "jshindi",
 price: 9.99,
 courseinstructor: "hitesh"
}

// console.log(course.courseinstructor)
const {courseinstructor : instructor} = course

// console.log(courseinstructor)

console.log(instructor) // object desctructing

// {
//     "name":"Asif",
//     "coursename":"JS in Urdu",
//     "price": "Free"
// }