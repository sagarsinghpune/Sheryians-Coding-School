// 1. Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function timer(func) {
//     setTimeout(func, 3000);
// }

// timer(function () {
//     console.log("hello");
// })

// 2. Implement your own version of `.map()` as a higher-order function.

// var arr = [1,2,3,4,5]

// var num = arr.map(function(value) {
//     return value + 2;
// })

// var arr = [1,2,3,4,5]

// function mapcopy(arr, fnc) {
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(fnc(arr[i]));
//     }
//     return newArr
// }

// // console.log(mapcopy(arr, value => value + 2));

// var ans = mapcopy(arr, function (value) {
//     return value + 2
// })

// console.log(ans);

// 3. Write a function that uses closures to create a counter.

// function counter() {
//     var count = 0;
//     return function () {
//         count++
//         console.log(count);
//     }
// }

// var num = counter();

// num();
// num();

// 4. Implement a function that limits how many times another function can be called (Closure + HOF).

function limiter(func, limit) {
    let count = 0;
    return function () {
        if (count < limit) {
            count += 1;
            func();
        }
    }
}

var ans = limiter(() => console.log("hello"), 3)

ans();
ans();









