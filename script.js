let numeric = ["0,1,2,3,4,6,7,8,9"]
let symbols = ['!','#','$','%']
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
   
    if (containPassword < 8 || containPassword > 128) {
    
      alert ("Password must be at least 8 characters and no more than 128 characters!"); 

     containPassword = prompt("How many characters would you like your password to contain?");
    }

var symbols = confirm("Click OK to confirm including special characters.");

var numeric = confirm("Click OK to confirm including numeric characters.");

var lowercase = confirm("Click OK to confirm including lowercase characters");

var uppercase = confirm("Click OK to confirm including uppercase characters.");
} 

let generatedPassword = '';

//console.log("Saved options for password generation", special, numeric, lowercase, uppercase);
var passwordVariables = ["symbols",  "numeric", "lowercase", "uppercase"];
if (symbols) {
 // add symbol characters to the the passwordVariables array
 passwordVariables.concat(symbols)
} 

if (numeric) {
  // add numeric characters to the the passwordVariables array
  passwordVariables.concat(numeric)
 } 
 if (lowercase) {
  // add lowercase characters to the the passwordVariables array
  passwordVariables.concat(lowercase)
 } 
 if (uppercase) {
  // add uppercase characters to the the passwordVariables array
  passwordVariables.concat(uppercase)
 } 


  var passwordLength =  passwordVariables
  //[{symbols}, {numeric}, {lowercase},{uppercase}];
  
//if (symbols + numeric + lowercase + uppercase === 0){
  //return;
//}

for(var i = 0; i < passwordVariables.length; i++) {
     passwordVariables[i];
};


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

//console.log(getLowercase());


function getUppercase () {
   return String.fromCharCode(Math.floor(Math.random () * 26) + 65);  
}

