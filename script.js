// Assignment Code
var generateBtn = document.querySelector("#generate");

var containPassword = prompt("How many characters would you like your password to contain?");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//generate character functions https://net-comber.com/charset.html 
//(https://owasp.org/www-community/password-special-characters) 

//  alert(Click OK to confirm including special characters.);...name getRandomSpecial
// alert(Click OK to confirm including numeric characters.);....name  getRandomNUmber
//   alert(Click OK to confirm including lowercase characters);...name getRandomLower
//   alert(Click OK to confirm including uppercase characters.);...name getRandomUpper  
function getRandomLower(){
  return String.char(Math.floor(Math.random() * 128) + 97);
}
 console.log(getRandomLower)

function getRandomUpper(){
  return String.char(Math.floor(Math.random() * 128) + 65);
}

function getRandomNumber(){
  return (Math.random) * 128 +8;

}
function getRandomSpecial(){
  return (symbols);
}

//need prompt
// var generatePassword = prompt("How many characters would you like your password to contain?")

function generatePassword() {
   return "This will be replaced by my generated password."; 
   }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
