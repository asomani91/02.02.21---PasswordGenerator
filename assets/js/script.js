// Step 1: label all elements, constant variables & storage
var generateBtn = document.querySelector("#generate");

var number = "0123456789"
var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
// var password = [number, lowercaseLetter, uppercaseLetter, specialCharacter]
var passwordPool = []
// passwordPool will hold all of the selected elements for password
// Step 2: Create function to grab user input
function generateUserOption() {
  var confirmPasswordLength = prompt("Choose a password length between 8 & 128")
  console.log(parseInt(confirmPasswordLength));
  // to keep within a bound edgecase
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

  var confirmLowerCase = confirm("Would you like to include lowercase letters?")
  console.log(confirmLowerCase);

  var confirmUpperCase = confirm("Would you like to inlude uppercase letters?")
  console.log(confirmUpperCase);

  var confirmSpecialCharacter = confirm("Would you like special characters?")
  console.log(confirmSpecialCharacter);

  if (confirmNumber === false &&
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmSpecialCharacter === false) {
    alert("Password must include at least one character type!")
    return;
  };
  var userOption = {
    confirmPasswordLength,
    confirmNumber,
    confirmLowerCase,
    confirmUpperCase,
    confirmSpecialCharacter,
  };
  return (userOption);

}

// Write password to the #password input
// Step 3: Use user input to generate password
function generatePassword() {
  var result = []
  var userChoice = generateUserOption();
  console.log("User Option:", userChoice);
  if (userChoice.confirmNumber) {
    var numbers = number.split("");
    console.log("Numbers: ", numbers);
    for (var i = 0; i < numbers.length; i++) {
      passwordPool.push(numbers[i])
    }
  }
  if (userChoice.confirmLowerCase) {
    var lower = lowercaseLetter.split("");
    for (var i = 0; i < lower.length; i++) {
      passwordPool.push(lower[i])
    }
  }
  if (userChoice.confirmUpperCase) {
    var upper = uppercaseLetter.split("");
    for (var i = 0; i < upper.length; i++) {
      passwordPool.push(upper[i])
    }
  }
  if (userChoice.confirmSpecialCharacter) {
    var special = specialCharacter.split("");
    for (var i = 0; i < special.length; i++) {
      passwordPool.push(special[i])
    }
  }

  for (var i = 0; i < userChoice.confirmPasswordLength; i++) {
    var x = Math.floor(Math.random() * passwordPool.length)
    result.push(passwordPool[x])
  }
  return (result.join(""))
}

// Step 4: Generate to page
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
