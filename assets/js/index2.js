//
// DATA STRUCTURE - GLOBAL VARIABLES
//

// Creating strings
var numberStr = "1234567890";
var upperCharStr = "ABCDEFGHIJKLMNOPQUVWXYZ";
var lowerCharStr = upperCharStr.toLowerCase();
// console.log("lowerCase: ", lowerCharStr);
var specialCharStr = "!@#$%^&*(){}|[],./<>?";

// Creating arrays
var numberArr = numberStr.split("");
// console.log("numberArr", numberArr);
var upperCharArr = upperCharStr.split("");
var lowerCharArr = lowerCharStr.split("");
var specialCharArr = specialCharStr.split("");

var userChoiceLength = 20;
var passwordArr = [];

// ToDo: Combining assignment of strings and arrays into one line of code

// Creating a ppol of characters
var userChoicePoolArr = [];

function copyToUserChoiceCharsPoolFrom(charArr) {
    for (var i = 0; i < charArr.length; i++) {
        userChoicePoolArr.push(charArr[i]);
    }
    console.log("userChoicePoolArr: ", userChoicePoolArr);
}

// In case user selected numbers
copyToUserChoiceCharsPoolFrom(numberArr);

// In case user selected uppercase chars
copyToUserChoiceCharsPoolFrom(upperCharArr);


// In case user selected lower chars
copyToUserChoiceCharsPoolFrom(lowerCharArr);


// In case user selected special chars
copyToUserChoiceCharsPoolFrom(specialCharArr);


// Using random method to create index to the pool for password
for (var i = 0; i < userChoiceLength; i++) {
    var index = Math.floor(Math.random() * userChoicePoolArr.length ) ;
    passwordArr.push(userChoicePoolArr[index]);
}
console.log("passwordArr: ", passwordArr);

// Making sure at least one char of user's choice is included
// Provided user has selected numbers
var indexNumbers = Math.floor(Math.random() * numberArr.length);
var pwdIndex = 0;

passwordArr[pwdIndex++] = numberArr[indexNumbers];

// Provided user has selected uppercase chars
var indexUppers = Math.floor(Math.random() * upperCharArr.length);
passwordArr[pwdIndex++] = upperCharArr[indexUppers];

// Provided user has selected lowercase chars
var indexLowers = Math.floor(Math.random() * lowerCharArr.length);
passwordArr[pwdIndex++] = lowerCharArr[indexLowers];

// Provided user has selected lowercase chars
var indexSpecial = Math.floor(Math.random() * specialCharArr.length);
passwordArr[pwdIndex++] = specialCharArr[indexSpecial];

console.log("passwordArr: ", passwordArr);

// To study further: array.concat(), ,..spread 
