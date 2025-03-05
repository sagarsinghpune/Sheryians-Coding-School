// 1. Create a function that takes a callback and executes it after every `n` seconds indefinitely. ✅

// function timeCB(fnc, timer) {
//     setInterval(fnc, timer);
// }

// timeCB(function() {
//     console.log("hello");
// }, 2000)

// 2. Implement a function that returns a function with a preset greeting (Closure). ✅

// function greeting(greet){
//     return function (name) {
//         console.log(`${greet}! ${name}`);
//     }
// }

// let indiangreater = greeting("Namaste");
// indiangreater("sagar");
// indiangreater("mangesh");

// let spanishgreater = greeting("Hola");
// spanishgreater("sagar")
// spanishgreater("mangesh")
// spanishgreater("ganesh")

// 3. Implement a function that takes a callback and only executes it once (HOF + Closure). ✅

// function abcd(func) {
//     let excuted = false;
//     return function () {
//         if (!excuted) {
//             excuted = true;
//             func()
//         }
//     }
// }

// var ans = abcd(function () {
//     console.log("Hello");
// })

// ans();
// ans();
// ans();

// 4. Implement a function that throttles another function (HOF + Closures). ✅

// function throttles(func, delay) {
//     let lastCalled = 0
//     return function () {
//         let current = Date.now();
//         if (current - lastCalled >= delay) {
//             lastCalled = current;
//             func()
//         }
//     }
// }

// var ans = throttles(function(){
//     console.log("Run only once");
// }, 2000)

// ans();
