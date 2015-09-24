//Part 1

/*
//STEP 1 - App that prompts user for their name, and finds the length of characters in the name.
var userName = prompt("What is your name?");
alert(userName + ", your name has " + userName.length + " characters.");
*/


/*
//STEP 2 - App that prompts user for their name, then prompts for a number, which finds the letter number in the string.
var userName = prompt("What is your name?");
var nameLength = userName.length - 1;
var theNumber = prompt("Enter a number between 0 and " + nameLength + ":");
alert("The number \"" + theNumber + "\" corresponds to the letter \"" + userName.charAt(theNumber) + "\" in your name.");
*/

/*
//STEP 3 - App that prompt the user for their first name, then last name and displays a message.
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
alert("Your name is: " + firstName + " " + lastName + ".");
*/

/*
//STEP 4 - App that stores a text in a variable and finds the index of a word.
var theText = "The quick brown fox jumps over the lazy dog";
alert("The index of \"fox\" is: " + theText.indexOf("fox"));
*/

/*
//STEP 5 - App that stores a text in a variable and finds the last instance of a word.
var theText = "The quick brown fox jumps over the lazy fox";
alert("The last instance of \"fox\" is: " + theText.lastIndexOf("fox"));
*/

/*
//STEP 6 - App that stores a text in a variable, prompts user for name, then replaces part of the original text with name.
var theText = "The quick brown fox jumped over the lazy dog";
var userName = prompt("What is your full name?");
alert(theText.replace(/the lazy dog/g, userName));
*/


/*
//STEP 7 - App that stores a text in a variable, prompts user for a word, then searches for the word.
var theText = "The quick brown fox jumped over the lazy dog";
var theWord = prompt("Type a word:");
alert(theText.search(theWord));
*/

/*
//STEP 8 - App App that stores a text in a variable, then it extracts part of the text.
var old_string = "The quick brown fox jumped over the lazy dog";
var new_string = old_string.slice(32);
alert(new_string.toUpperCase());
*/

/*
//STEP 9 - App that stores a uppercase text with lots of whitespace in a variable, then cuts whitespaces and converts text to lowercase.
var theText = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
alert (theText.trim().toLowerCase());
*/

/*
//STEP 10 - App that stores a text in a variable, then capitalizes the first letter in the text.
var theText = "the quick brown fox jumped over the lazy dog.";
var capitalFirstLetter = theText.charAt(0).toUpperCase();
alert(theText.replace(theText.charAt(0), capitalFirstLetter));
*/

