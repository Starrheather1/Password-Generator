// query select

var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");

function generatePassword() {

    // step 1: get user input
    var passLength = prompt("What is the length of the password?")
    // validate the passLenght - should be atleast 8, but no more than 128
    if (passLength < 8) {
        alert("Invalid length! Cannot be less than 8")
        return;
    }

    if (passLength > 128) {
        alert("Invalid length! Cannot be more than 128")
        return;
    }

    var includeUppercase = confirm("Do you want to include uppercase?")
    var includeLowercase = confirm("Do you want to include lowercase?")
    var includeNumber = confirm("Do you want to include numbers?")
    var includeSpecial = confirm("Do you want to include special characters?")

    var allIsFalse = !includeUppercase && !includeLowercase && !includeNumber && !includeSpecial

    // validate if at least one of the include is true
    if (allIsFalse) {
        alert("Must at least include one character type!")
        return;
    }

    // step 2: 

    // prepare the selected set of characters
    var uppercase = "ABCDE"
    var lowercase = "abcde"
    var numbers = "1234567890"
    var special = "!@#$%"

    var selected = ""

    if (includeUppercase) {
        selected = selected + uppercase;
    }

    if (includeLowercase) {
        selected = selected + lowercase;
    }

    if (includeNumber) {
        selected = selected + numbers
    }

    if (includeSpecial) {
        selected = selected + special;
    }

    console.log(selected)


    // step 3: generate password

    var password = ""

    for (i = 0; i < passLength; i++) {
        var randomIndex = Math.floor(Math.random() * selected.length)
        var randomChar = selected.charAt(randomIndex)
        password = password + randomChar
    }


    textArea.value = password
}

generateBtn.addEventListener("click", generatePassword)