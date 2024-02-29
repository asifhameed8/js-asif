const myobject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'swift by apple'
}

for (const key in myobject) {
   //console.log(`${key} is shortcut for ${myobject[key]}`);
}

const programming = ["js", "py","rb", "cpp", "java"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('PK', 'Pakistan')
map.set('US', 'United State of America')
map.set('FR', 'France')
map.set('FR', 'France')

for (const key in map) {
    console.log(key);
}