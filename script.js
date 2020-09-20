// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = prompt("How many characters would you like your password to contain?"){
  alert("Click OK to confirm including special characters.");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function getRandomLower(){
  return (Math.floor(Math.random() * 128));
}

function getRandomUpper(){
  return (Math.floor(Math.random() * 128));
}

function getRandomSpecial(){
  return (symbols);
}

//need prompt
// var generatePassword = prompt("How many characters would you like your password to contain?"){
//  alert(Click OK to confirm including special characters.);
// alert(Click OK to confirm including numeric characters.);....name  
//   alert(Click OK to confirm including lowercase characters);...name getRandomLower
//   alert(Click OK to confirm including uppercase characters.);...name getRandomUpper  
//     }
//https://net-comber.com/charset.html character sets

// Generate functions (https://owasp.org/www-community/password-special-characters) 
//   function getRandomLower(){
//   return (Math.floor(Math.random()* 128));

//   function getRandomUpper(){
//   return (Math.floor(Math.random()* 128));

//  console.log(getRandomLower());

//  function getRandomSpecial(){
 //   return symbols[0];




function generatePassword(){
   return ("This will be replaced by my generated password."); 
   }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
