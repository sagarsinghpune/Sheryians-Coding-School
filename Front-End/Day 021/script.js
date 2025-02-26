// 1. Log "Hello, JavaScript!" to the console in 3 different ways. ✅

// console.log("Hello, JavaScript");
// console.warn("Hello, JavaScript");
// console.error("Hello, JavaScript");
// console.info("Hello, JavaScript");
// console.table({Text: "Hello, JavaScript"})
// console.group("Hello, JavaScript")
// console.groupEnd();

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result. ✅

// var ans = 35 * 2  - (10 / 2) + 7;

// // 70 - 5 + 7
// // 65 + 7 = 72

// console.log(ans);

// 3. Log the data type of "123", 123, true, and null using typeof. ✅

// console.log("123", typeof("123"));
// console.log(123, typeof(123));
// console.log(true, typeof(true));
// console.log(null, typeof(null)); // its type is obj as when creating null it was wronly assigned datatag as 0x00 which also datatag for the object {}
// console.log(undefined, typeof(undefined));
// console.log([], typeof([]));
// console.log({}, typeof({}));
// console.log(function(){}, typeof(function(){}));

// 4. Write a program that swaps the values of two variables. ✅

// // First Method: Create a empty bucket and then do the tranfer

// // var c;

// // c = a;
// // a = b;
// // b = c;

// // console.log(a,b);

// // Second Method: Use the array

// // [a, b] = [b, a]

// // console.log(a, b);

// // Thrid Method: Additon & substraction

// var a = 15;
// var b = 5;

// a = a + b; // 10+20 = 30
// b = a - b; // 30 - 20 = 10
// a = a - b; // 30 - 10 = 20

// console.log(a, b);

// 5. Use console.group() to organize logs into a group. ✅

// console.groupCollapsed("Aaj ka hisab:")
//     console.log("Apple Rs. 125");
//     console.log("Graphs Rs. 57");
//     console.log("Banana Rs. 34");
//     console.log("Stawberry Rs. 97");
// console.groupEnd()

// 6. Declare a const object, modify its properties, and log the updated object. ✅

// const obj = {
//     name: "Harsh",
//     age: 26,
//     emailID: "harsh@testmail.com",
//     prof: "Full Stack Teacher",
// };

// Object.freeze(obj);

// // modefying the value
// obj.age = 45;

// // adding  new propertites
// obj.lastname = "Singh"

// console.log(obj)

// 7. Convert "50" (string) into a number using 3 different methods. ✅

// first method: Number()

// var a = "50";
// console.log(typeof(a))

// a = Number("50")
// console.log(typeof(a))

// // second method: parseInt()

// a = parseInt("50")
// console.log(typeof(a));

// // third method: adding + before the string

// a = +"50";
// console.log(typeof(a));

// 8. Check if "JavaScript" contains "Script" without using .includes(). ✅

// var str = "JavaScript"

// console.log(str.includes("Script"));

// str.indexOf("Script") === -1 ? console.log(false) : console.log(true);

// str.search("Scripta") === -1 ? console.log(false) : console.log(true);

// 9. Create an array of 5 numbers and log the sum using .reduce().

// var arr = [10, 20, 30, 40, 50]

// let sum = arr.reduce((acc, num) => acc + num);

// console.log(sum);

// 10. Explain the difference between undefined, null, and NaN with examples. ✅

// Undefined: Its a variable which is initialized but the value is not decalred

// null: Value is null or empty

// NaN : not a number basic when you perform certain oerathmatic which is mathmeticaly not possiable liek str * num will give you NAN

// Thank you










    


 









