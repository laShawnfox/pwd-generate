// Assignment Code
var generateBtn = document.querySelector("#generate");


//need prompt
// var generatePassword = prompt("How many characters would you like your password to contain?")


  var containPassword = prompt("How many characters would you like your password to contain?");
  if (password < 8 && 128)
alert ("Password must be 8 more characters and no more than 128 characters!"); 
///or should i document.write this
//var containPassword = prompt("How many characters would you like your password to contain?");
alert("Click OK to confirm including special characters.");
alert("Click OK to confirm including numeric characters.");
alert("Click OK to confirm including lowercase characters");
alert("Click OK to confirm including uppercase characters.");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//generate character functions https://net-comber.com/charset.html 
//(https://owasp.org/www-community/password-special-characters) 

//group randoms as randomFunc 
function getRandomLower(){
  return String.char(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
  return String.char(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
  return Math.floor((Math.random() * 128) +8);

}
function getRandomSpecial(){
  var special = '!#$%&*@';	
  return special(Math.floor(Math.random() * special.length));
}
console.log(getRandomSpecial());
//call all random functions
// randomFunc (){
//        getRandomLower(); getRandomUpper();getRandomNumber();getRandomSpecial();
// }
// randomFunc ();
// OR do I move the functions into getRandomSpecial

//Do we need to loop through all random functions?
// var randomFuncEl = document.querySelector("random");
// for(var i = 0; i < randomFuncEl.length; i++){
 //  getRandomLower(); getRandomUpper();getRandomNumber();getRandomSpecial();
//    }

//loop through special?
//var specialEl = document.querySElector("special");
// for(var i = 0; i < specialsEl.length; i++)

function generatePassword() {
   return "This will be replaced by my generated password."; 
   }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
