// global scope
//var c = 300;

let a = 300;

if (true){
    // block scope
    let a=10
    const b = 20
   // var c=30;
   console.log("INNER: ", a)
}

 console.log(a)
// console.log(b)
//console.log(c)

function one(){
  const username = "asif"

  function two(){
    const website = "youtube"
    console.log(username)
  }
  //console.log(website)
  two()
}
//one()

if(true){
    const username = "asif"
  if(username === "asif"){
    const website = " youtube"
    console.log(username + website)
  }
  //console.log(website)
}
//console.log(username)

// ++++++++++++++++++++++++ intresting ++++++++++++++++++++

console.log(addone(5))

function addone(num){
  return num+1;
}



// expressions



const addTwo = function(num){
  return (num + 2);
}

addTwo(5)
