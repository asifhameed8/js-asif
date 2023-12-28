// const tinderUser = new Object(); // singleton
const tinderUser = {} // non singlton
tinderUser.id = "123abcd"
tinderUser.name = "kdasif"
tinderUser.isLoggedIn = false;

console.log(tinderUser)

const regularUser = {
   
    email: "some@gmail.com",
    fullname: {
       userfullname: {
        firstname : "Asif",
        lastname: "Hameed"
       }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj4 = { 5: "c", 6: "d"}

//const obj3 = {obj1 , obj2}
const obj3 = Object.assign({},obj1,obj2, obj4)


console.log(obj3)