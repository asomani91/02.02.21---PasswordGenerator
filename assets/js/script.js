
var generateBtn = document.querySelector("#generate");

var number = "0123456789"
var uppercaseLetter = "abcdefghijklmnopqrstuvwxyz"
var lowercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var password = [number, uppercaseLetter, lowercaseLetter, specialCharacter]

function generatePassword() {
  var confirmPasswordLength = prompt("Choose a password length between 8 & 128")
  console.log(parseInt(confirmPasswordLength));
  if (confirmPasswordLength < 8) {
    alert("Password length must be at least 8 characters!")
    return;
  };

  if (confirmPasswordLength > 128) {
    alert("Password length must be no more than 128 characters!")
    return;
  };

  var confirmNumber = confirm("Would like to include a number?")
  console.log(confirmNumber);

  var confirmUpperCase = confirm("Would you like to include uppercase letters?")
  console.log(confirmUpperCase);

  var confirmLowerCase = confirm("Would you like to inlude lowercase letter?")
  console.log(confirmLowerCase);

  var confirmSpecialCharacter = confirm("Would you like special characters?")
  console.log(confirmSpecialCharacter);

  if (confirmNumber === false &&
    confirmUpperCase === false &&
    confirmLowerCase === false &&
    confirmSpecialCharacter === false) {
    alert("Password must include at least one character type!")
    return;
  };
  var generatePassword = {
    confirmPasswordLength,
    confirmNumber,
    confirmUpperCase,
    confirmLowerCase,
  }; return(generatePassword)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
