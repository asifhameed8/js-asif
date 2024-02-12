const userEmail = "asif@gmail.com"

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// falsy values

// false, 0, -0, bingint 0n, null, "", undefined, Nan,

// truthy values

// truth values,

// "0", 'false' , ' ', [], {} , function(){} , 

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const empObj = {}

if(Object.keys(empObj).length === 0){
    console.log("Array is empty")
}

// Nullish coalescing operator(??)

let val1;
// val1 = 5 ?? 10;
//val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;


console.log(val1);

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less")
