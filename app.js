const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
    
   
 }



function check() {
    const value = input.value;
    const reverse = reverseString(value)
   
    if (value === reverse){
        alert("P A L I N D R O M E")
    
    }
  else {
    alert( " Not a palindrome!")
  }

  input.value = ""
}

const palindrome = {type: "word " , meaning:"that is spelled he same forward as it is backwards"  } 
document.getElementById("palindrome").innerHTML = "Palindrome is a " + palindrome.type + palindrome.meaning;




















