
function convertToRoman(decimalNumber) {

    const romanList = {
        M:1000, 
        CM:900, 
        D:500, 
        CD:400, 
        C:100, 
        XC:90, 
        L:50, 
        XL:40, 
        X:10, 
        IX:9, 
        V:5, 
        IV:4, 
        I:1
    }

    let output = ""

    for (let i in romanList) {
    while (decimalNumber >= romanList[i]) {
        output += i; 
        decimalNumber -= romanList[i]
    }
    }

    return output; 

   
}

function handleConvert() {

const numberInput= document.getElementById('number-input')
const result = document.getElementById('result-div')

const decimalNumber= parseInt (numberInput.value)

  // Validate the input
  if (isNaN(decimalNumber) || decimalNumber <= 0 || decimalNumber > 3999) {
    result.textContent = 'Please enter a valid number (1 to 3999)';
    return;
}

const romanNumeral  = convertToRoman(decimalNumber)
result.textContent = `Roman Numeral: ${romanNumeral}`

} 



const submit = document.getElementById('submit');
submit.addEventListener('click', handleConvert);


