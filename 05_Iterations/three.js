// for of

// ["","", ""]

// [{},{}, {}]

const arr = [1,2,3,4,5]

for (const num in arr) {
   // console.log(num)
}

const greetings = "Hello World"

for (const greet of greetings) {
   //console.log(`Each Character is ${greet}`)
}

// Maps

const map = new Map()
map.set('PK', 'Pakistan')
map.set('US', 'United State of America')
map.set('FR', 'France')
map.set('FR', 'France')
//console.log(map);

for (const [key, value] of map) {
   console.log(key, ':-' , value)
}

const myObject = {
   game1 : 'NFS',
   game2 : 'spiderman',
}

for (const [key,value] of myObject) {
   console.log(key, ':- ', value);
}