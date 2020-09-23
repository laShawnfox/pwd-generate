let numbers = [0,1,2,3,4,6,7,8,9]
let specials = ['!','#','$','%']
let lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


 

var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var containPassword = prompt("How many characters would you like your password to contain?");
  if (containPassword < 8 && 128){
    alert ("Password must be at least 8 characters and no more than 128 characters!"); 
     containPassword = prompt("How many characters would you like your password to contain?");
  }

var special = confirm("Click OK to confirm including special characters.");
var numeric = confirm("Click OK to confirm including numeric characters.");
var lowercase = confirm("Click OK to confirm including lowercase characters");
var uppercase = confirm("Click OK to confirm including uppercase characters.");

//console.log("Saved options for password generation", special, numeric, lowercase, uppercase)

var typesCount =  special + numeric + lowercase + uppercase
if(typesCount === 0) {
   return '';
}


var passwordVariables = []
if (special) {
 // add special characters to the the passwordVariables array
 passwordVariables.concat(special)
} else {

}


}



// after password variables is populated then 
// you will need to select a random index from they array 
// as many times as the password length

