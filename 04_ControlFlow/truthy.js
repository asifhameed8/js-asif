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
val1 = 5 ?? 10;


console.log(val1);

