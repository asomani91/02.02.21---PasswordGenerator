// An array for a different choice of characters
    // an array for special characters, for uppercase, lowercase, and numbersf
var lowerCase = ['a', 'b',]

var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split()

// Write a function that allows us to propt the user. Should be written in a function. 
// In that function we are going to ask the user how many words we want the password to be. 
function userpasswordOptions(){
    var passLength = parseInt(
        prompt('How many characters would you like your password to contain?')
    );
    
    if (isNaN(passLength) === true) {
        alert('Password length must be provided as a number')
    };
    
    if (passLength < 8) {
        alert('password length must be at least 8 chars');
        return;
    }
}



// After that prompt, we need a check to make sure they chose between 8- 128 characters



// Next we will prompt them for what characters they want. Will be a confirm prompt for all 4.



// need to make sure that the user picked at least one character type for password.



// We now need an object to store the user input- meaning the length, what characters will be used in password.



// we will now return the object- we will now know what will be the possible choices.



//After we have user inputs, we want to write a function to randomize the letters inside that we can give the password  (will use math.random to generate that).



// Then we will creat another function- make an array w the results, an array for possible characters, 
// and set an array for guarenteed characters (characters guarenteed for pw)



// then we will creat a loop that goes through the results array- (need to look up push and join)
// Once we push into a new array (results array), using join we will take the characters from results array and turn into a string



// After we turn into a string, we write the password to the page using(.value)







