// 1. Age Category Message – Ask the user for their age. If they are
// under 18, print “You are a minor.” If they are between 18 and 60,
// print “You are an adult.” If they are above 60, print “You are a
// senior citizen.”

// let age = Number(prompt("Enter your age: "));

// if (age < 18) {
//     console.log("You are a minor");
// } else if (age >= 18 && age <= 60) {
//     console.log("You are an adult");
// } else {
//     console.log("You are a senior citizen");
// }

// ----------------------------------------------------------------------------------- //

// 2. Even or Odd Sum – Take two numbers from the user using
// prompt(). If the sum of both numbers is even, print “Even Sum”;
// otherwise, print “Odd Sum.”

// let num1 = Number(prompt("Enter your first number: "));
// let num2 = Number(prompt("Enter your second number: "));

// let ans = num1 + num2;

// if (ans % 2 == 0) {
    //     console.log("Even Sum");
    // } else {
        //     console.log("Odd Sum");
        // }
        
// ----------------------------------------------------------------------------------- //
   
// 3. Character Case Checker – Ask the user for a single character.
// Check if it's uppercase, lowercase, or neither (not a letter).

// let str = prompt("Enter a single character: ");

// if (isNaN(str)) {
//     switch (str) {
//         case str.toUpperCase():
//             console.log("Uppercase Character");
//             break;
    
//         case str.toLowerCase():
//             console.log("Lowercase Character");
//             break;
    
//         default:
//             console.log("Neither (Not a letter)");
//     }
// } else {
//     console.log("Neither (Not a letter)");
// }

// ----------------------------------------------------------------------------------- //

// 4. Largest of Three Numbers – Take three numbers as input and
// print the largest number among them without using
// Math.max().

let a = 9
let b = 9
let c = 9

// 1. a > b 2. b > c 3. c > a 4. b > a 5. c > b 6. a > c

if (a > b) {
    if (b > c) {
        console.log(a); 
    } else if (b < c) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    }
} else if (b > c) {
    if (c > a) {
        console.log(b);
    } else if (c < a) {
        if (b > a) {
            console.log(b);
        } else {
            console.log(a);
        }
    }
} else if (c > a) {
    if (a > b) {
        console.log(c);
    } else if (a < b) {
        if (c > b) {
            console.log(c);
        } else {
            console.log(b);
        }
    }
} else if (b > a) {
    if (a > c) {
        console.log(b);
    } else if (a < c) {
        if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    } 
} else if (c > b) {
    if (b > a) {
        console.log(c);
    } else if (b < a) {
        if (c > a) {
            console.log(c);
        } else {
            console.log(a);
        }
    }
} else if (a > c) {
    if (c > b) {
        console.log(a);
    } else if (c < b) {
        if (a > b) {
            console.log(a);
        } else {
            console.log(b);
            
        }
    }
}

