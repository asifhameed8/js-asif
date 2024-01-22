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

function chai(){
    let username = "asif"
    // console.log(this)
    console.log(this.username)
}
chai()