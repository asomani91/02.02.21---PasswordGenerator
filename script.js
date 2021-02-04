
var generateBtn = document.querySelector("#generate");

var number = "0123456789"
var uppercaseLetter = "abcdefghijklmnopqrstuvwxyz"  
var lowercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacter =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
  var confirmPasswordLength = prompt("Choose a password length between 8 & 128");
  console.log(confirmPasswordLength);

  var confirmUpperCase = prompt("Would you like to include uppercase letters?");
  console.log(confirmUpperCase);


  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
