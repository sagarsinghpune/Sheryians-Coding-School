// 1. Age Category Message ✅

// var age = 64;

// if (age < 18) {
//     console.log("You are a minor");
// } else if (age >= 18 && age <= 60) {
//     console.log("You are an adult");
// } else {
//     console.log("You are an senior citizen");
    
// }

// 2. Even or Odd Sum ✅

// var a = 4;
// var b = 6;

// var ans = a + b;

// ans % 2 == 0 ? console.log("Even Sum") : console.log("Odd Sum");

// 3. Character case checker  ✅

// var cha = "C";

// var ans = parseInt(cha) / parseInt(cha);

// if (isNaN(ans) && cha.toUpperCase() == cha) {
//     console.log("uppercase");
// } else if (isNaN(ans) && cha.toLowerCase() == cha) {
//     console.log("lowercase");
// } else {
//     console.log("Neither (Not a letter)")
// }

// 4. Largest of three number ✅

// var a = 11;
// var b = 10;
// var c = 12;

// if (a >= b && a >= c) {
//     console.log(a);
// } else if (b >= c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// 5. Leap Year Checker ✅

// its a leap if it statisfy any of the one conditoins 1. multiple of 400 or 2. multiple of 4 but not 100

// var year = 200;

// console.log(year % 4); // this should be 0
// console.log(year % 100); // this should not be 0

// if (year % 4 == 0 && year % 100 !== 0) {
//     console.log("Leap Year");
// } else if (year % 400 == 0){
//     console.log("Leap Year");
// } else {
//     console.log("Not Leap Year");
    
// }

// 6. Simple Calculator

// var num1 = 5;
// var num2 = 2;

// var opr = "%";

// if (opr == "+" || opr == "-" || opr == "*" || opr == "/") {
//     if (opr == "+") {
//         console.log(num1 + num2);
//     }
//     else if (opr == "-") {
//         console.log(num1 - num2);
//     }
//     else if (opr == "*") {
//         console.log(num1 * num2);
//     }
//     else if (opr == "/") {
//         console.log(num1 / num2);
//     }
// } else {
//     console.log("Please select correct operator [+, -, *, /]");
    
// }

// 7. Postivie / Negative or Zero ✅

// var a = 0

// if (a > 0) {
//     console.log("Postivie");
// } else if (a < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");

// }

// 8. User Greeting ✅

// var user = "ganesh";

// var time = 24;

// if (time >= 5 && time < 12) {
//     console.log("Good Morning", user.charAt(0).toUpperCase()+user.slice(1).toLowerCase());
// } else if (time >= 12 && time < 17) {
//     console.log("Good Afternoon", user.charAt(0).toUpperCase()+user.slice(1).toLowerCase());
// } else if (time >= 17 && time < 21) {
//     console.log("Good Evening", user.charAt(0).toUpperCase()+user.slice(1).toLowerCase());
// } else if ((time >= 21 && time <= 24) || (time >= 0 && time < 5)) {
//     console.log("Good Night", user.charAt(0).toUpperCase()+user.slice(1).toLowerCase());
// } else {
//     console.log("Enter Valid Time");
// }

// 9. Traffic Light ✅

// var light = "Yellow"

// if (light.toLowerCase() == "red") {
//     console.log("Stop!");
// } else if (light.toLowerCase() == "yellow") {
//     console.log("Get Ready!");
// } else if (light.toLowerCase() == "green") {
//     console.log("Go!");
// } else {
//     console.log("Loading.."); 
// }

// 10. Multiplication Table ✅

// var a = 6;

// for (let i = 1; i <= 10; i++) {
//     console.log(a + " x " + i + " = " + (a*i));
// }

// 11. Grade Calculator

// var marks = 45;

// if (marks >= 90 && marks <= 100) {
//     console.log('A');
// } else if (marks >= 80 && marks <= 89) {
//     console.log('B');   
// } else if (marks >= 70 && marks <= 79) {
//     console.log('C');   
// } else if (marks >= 60 && marks <= 69) {
//     console.log('D');   
// } else if (marks >= 0 && marks < 60) {
//     console.log('E');
// } else {
//     console.log("Enter valid marks");
// }


// 12. Simple login system ✅

// var admin_username = "sagarsingh"
// var admin_password = "loophealth"

// var username = prompt("Enter your username");
// var password = prompt("Enter your password");

// if (admin_username == username && admin_password == password) {
//     console.log("Login Successful");
// } else {
//     console.log("Try Again");
// }

// 13. Swapping without thrid variable ✅

// first method: using array

// var a = 12;
// var b = 20;

// // [a, b] = [b, a]

// // console.log(a, b);

// // second method: with additions

// a = a + b; // 12 + 20 = 32
// b = a - b; // 32 - 20 = 12
// a = a - b; // 32 - 12 = 20

// console.log(a, b);

// 14. FizzBuzz (Multiple of both) ✅

// var FizzBuzz = (value) => {
//     if (value % 3 == 0 && value % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (value % 3 == 0) {
//         console.log("Fizz");
//     } else if (value % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(value);
//     }
// }

// var number = 40;

// FizzBuzz(number);

// 15. Number Reversal (3 digit) ✅

// var num = 123;

// num = num.toString();

// var arr = new Array(3);

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = num.charAt(i);
// }

// var newArr = arr.reverse().reduce(function (acc, val) {
//     return acc + val // string so + means concat
// })

// newArr = parseInt(newArr);

// 16. Sum of digits ✅

// var num = 1235;

// num = num.toString();

// var arr = new Array(num.length)

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = parseInt(num.charAt(i));
// }

// var newArr = arr.reduce(function (acc, val) {
//     return acc + val
// }, 0)

// 17. Palindrome Check - If word read forward and backward as same ✅

// var str = "oyo";

// var arr = new Array(str.length);

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = str.charAt(i);
// }

// var newArr = arr.reverse().reduce(function (acc, val) {
//     return acc + val; // string so + mean concat
// })

// if (str === newArr) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }

// 18. Reverse without string method ✅

// var num = 456;
// var reverseNum = 0;
// var lastDigitNum;

// while (num != 0) {
//     lastDigitNum = num % 10;
//     reverseNum = (reverseNum * 10) + lastDigitNum
//     num = parseInt(num / 10)
// }

// console.log(reverseNum);

// 19. Find the second largest number (without sort() or math.max())




