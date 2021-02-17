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

// In case user selected numbers
for (var i = 0; i < numberArr.length; i++) {
    userChoicePoolArr.push(numberArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);

// In case user selected uppercase chars
for (var i = 0; i < upperCharArr.length; i++) {
    userChoicePoolArr.push(upperCharArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);

// In case user selected lower chars
for (var i = 0; i < lowerCharArr.length; i++) {
    userChoicePoolArr.push(lowerCharArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);


// In case user selected special chars
for (var i = 0; i < specialCharArr.length; i++) {
    userChoicePoolArr.push(specialCharArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);

// Using random method to cfeate index to the pool for password
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




// To study further: array.concat(), ,..spread, assign(), 
// instead of for loop, forEach


