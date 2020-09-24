var numeric = ["0,1,2,3,4,6,7,8,9"]
var symbols = ['!','#','$','%']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


var generateBtn = document.querySelector("#generate");
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;



function generatePassword() {
 
    var containPassword = prompt("How many characters would you like your password to contain?");
   
    if (containPassword < 8 || containPassword > 128) {
    
      alert ("Password must be at least 8 characters and no more than 128 characters!"); 

     containPassword = prompt("How many characters would you like your password to contain?");
    }



var symbols = confirm("Click OK to confirm including special characters.");

var numeric = confirm("Click OK to confirm including numeric characters.");

var lowercase = confirm("Click OK to confirm including lowercase characters");

var uppercase = confirm("Click OK to confirm including uppercase characters.");
//} 


//console.log("Saved options for password generation", special, numeric, lowercase, uppercase);

var passwordVariables = ["symbols","numeric","lowercase","uppercase"];
if (symbols) {
 // add symbol characters to the the passwordVariables array
 passwordVariables.concat(symbols);
} 

if (numeric) {
  passwordVariables.concat(numeric);
 } 

 if (lowercase) {
  passwordVariables.concat(lowercase);
 } 
 if (uppercase) {
  passwordVariables.concat(uppercase);
 } 
  

 function getSymbols () {
  var symbols = ['!','#','$','%'];
  return symbols[Math.floor(Math.random () * symbols.length)];
  }
//console.log(getSymbols());

 function getNumeric () {
    return String.fromCharCode(Math.floor(Math.random () * 10) + 48);
 }
    //console.log(getNumeric)

  
function getLowercase() {
  return String.fromCharCode(Math.floor(Math.random () * 26) + 97); 
}


function getUppercase () {
   return String.fromCharCode(Math.floor(Math.random () * 26) + 65);  
}

for(var i = 0; i < passwordVariables.length; i++) {
  var char = Math.floor(Math.random() * passwordVariables[i]);
};
}

 // Write password to the #password input
function writePassword() {
  var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);