//Assignment 2, Part 2

//Part 1 - Math and Math Functions
/*
//STEP 1
var theNumber = prompt("Please enter a number:");
console.log(Math.abs(theNumber));
*/

/*
//STEP 2
var theNumber = prompt("Please enter a decimal number:");
console.log(Math.ceil(theNumber));
*/

/*
//STEP 3
var theNumber = prompt("Please enter a decimal number:");
console.log(Math.floor(theNumber));
*/

/*
//STEP 4
var fiveNumbers = prompt("Please enter 5 numbers separated by commas(Example: 3, 4, 9, 8, 7):");
fiveNumbers = fiveNumbers.split(",");
console.log(Math.max.apply(Math, fiveNumbers) + ", " + Math.min.apply(Math, fiveNumbers));
*/

/*
//STEP 5
var theNumber = prompt("Please enter a number:");
console.log(Math.sqrt(theNumber));
*/


//Part 2 - Date and Date Functions

/*
//STEP 6
var theDate = new Date();
console.log(theDate.toDateString());
*/

/*
//STEP 7
var theDate = new Date();
var theMonth = theDate.getMonth();
var daysInMonth;
if (theMonth === 0, 2, 4, 6, 7, 9, 11) {
    daysInMonth = 31;
} else if (theMonth === 1) {
    daysInMonth = 28;
} else {
    daysInMonth = 30;
}
console.log(daysInMonth);
*/

/*
//STEP 8
var theDate = new Date();
var theMonth = theDate.getMonth();
switch (theMonth) {
        case 0:
            console.log("January");
            break;
        case 1:
            console.log("February");
            break;
        case 2:
            console.log("March");
            break;
        case 3:
            console.log("April");
            break;
        case 4:
            console.log("May");
            break;
        case 5:
            console.log("June");
            break;
        case 6:
            console.log("July");
            break;
        case 7:
            console.log("August");
            break;
        case 8:
            console.log("September");
            break;
        case 9:
            console.log("October");
            break;
        case 10:
            console.log("November");
            break;
        case 11:
            console.log("December");
            break;
    default:
        console.log("fail");
}
*/

/*
//STEP 9
var theDate = new Date();
var theDay = theDate.getDay();
console.log(theDay);
if (theDay == 5 || theDay == 6) {
    console.log("It's the weekend!");
} else { 
    console.log("It's NOT the weekend yet!");
}
*/


/*
//STEP 10
var theDate = new Date ();
var today = theDate.getDay();
var yesterday = today - 1;
switch (yesterday) {
    case 0:
        yesterday = "Sunday";
        break;
    case 1:
        yesterday = "Monday";
        break;
    case 2:
        yesterday = "Tuesday";
        break;
    case 3:
        yesterday = "Wednesday";
        break;
    case 4:
        yesterday = "Thursday";
        break;
    case 5:
        yesterday = "Friday";
        break;
    case 6:
        yesterday = "Saturday";
        break;
}
console.log("Yesterday was:" + " " + yesterday);
*/

/*
//STEP 11
var theDate = new Date();
var today = theDate.toDateString();
console.log(today.charAt(0));
*/

//Part 3 - Conditional Logic and Looping Operations
/*
//STEP 12
var firstNumber = parseInt(prompt("Enter a number:"));
var secondNumber = parseInt(prompt("Enter another number:"));
if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}
*/


/*
//STEP 13
var person = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
for (var x in person) {
    var theGrade = parseInt(prompt("Enter " + person[x] + "'s mark"));
    if (theGrade < 60) {
        theGrade = "F";
    } else if (theGrade < 70) {
        theGrade = "D";
    } else if (theGrade < 80) {
        theGrade = "C"
    } else if (theGrade < 90) {
        theGrade = "B";
    } else if (theGrade <= 100) {
        theGrade = "A";
    }
    
    console.log(person[x] + "'s grade is: " + theGrade);
}
*/

/*
//STEP 14
for (var i = 1; i <= 15; i++) {
    var oddOrEven;
    if (i % 2 == 0) {
        oddOrEven = "Even";
    } else {
        oddOrEven = "Odd";
    }
    console.log(i + " is " + oddOrEven);
}
*/

/*
//STEP 15
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log ("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/

/*
//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game
//STEP 1
var userReady = confirm("Are you Ready to play our game?");
if (userReady == true) {
    alert("Awesome, our here is waiting!");
} else {
    alert("Too bad, we're going to play anyway because our hero desperately needs your help!");
}

//STEP 2
alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

//STEP 3
var theDirection = prompt("Which direction would you like to head (please enter forward, left or right).");

theDirection = theDirection.toUpperCase();

//STEP 4
switch (theDirection) {
    case "FORWARD":
        alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
    case "LEFT":
        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;
    case "RIGHT":
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
    default:
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser");
}

//STEP 5
var theRating = parseInt(prompt("Rate the game ona scale of 1 to 10:"));

//STEP 6
if (theRating >= 1 && theRating <= 10) {
    theRating = theRating;
} else {
    theRating = 10;
}

if (theRating >= 6 && theRating <= 10) {
    alert("Thank you, we will continue to make improvements to the game!");
} else if (theRating >= 1 && theRating <= 5) {
    alert("Whatever, you weren’t very good at this game anyway!");
}
*/

/*
//Part 5 - The "Coin Flip" Game
//STEP 1
var coinFlip = Math.random();

//STEP 2
var choice = prompt("Choose heads or tails:");

//STEPS 3 - 7
if (coinFlip > 0.5 && choice == "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip > 0.5 && choice == "tails") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip < 0.5 && choice == "heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip < 0.5 && choice == "tails") {
    alert("The flip was tails and you chose tails...you win!");
}
*/

/*
//STEP 8
var coinFlip = Math.random();
console.log(coinFlip);
coinFlip = Math.round(coinFlip);
console.log(coinFlip);

var choice = prompt("Choose heads or tails:");

if (coinFlip == true && choice == "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip == true && choice == "tails") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip == false && choice == "heads") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (coinFlip == false && choice == "tails") {
    alert("The flip was tails and you chose tails...you win!");
}
*/

/*
//Part 6 - The "Coin Flip" Game Redux
//STEP 1
var coinFlip;

//STEPS 2 - 4
for (var i = 1; i <= 10; i++) {
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
    if (coinFlip == false) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
}
*/

/*
//Part 7 - The "Coin Flip Streak" Game
//STEP 1
var coinFlip;

//STEPS 2 - 5
do {
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
    if (coinFlip == false) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
} while (coinFlip == false);
*/

/*
//Part 8 - Looping a Triangle
var i = 0;
var hashTag = "#";
do {
    i +=1;
    console.log(hashTag);
    hashTag += "#";
} while (i < 7);
*/

/*
//Part 9 - Odd or Even
var i = 0;
do {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
    i++;
} while (i < 16);
*/
