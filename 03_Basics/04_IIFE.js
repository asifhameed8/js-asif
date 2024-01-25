// immediately invoked function expressions

(function chai(){
    // named IIFE
    console.log('Function executed')
})();

(() => {
    console.log('Function executed two')
})();

((name) => {
    console.log(`Function executed two ${name}`)
})('Asif')