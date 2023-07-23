
function convertToRoman(numberInput) {

    const romanList = {
        M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}

    let output = ""
    for (let i in romanList) {
    while (numberInput >= romanList[i]) {
        output += i; 
        number -= romanList[i]
    }
    }

    return output; 
}

function handleConvert() {

const numberInput= document.getElementById('number-input')
const result = document.getElementById('result-div')

const romanNumeral  = convertToRoman(numberInput)
result.textContent = `Roman Numeral: ${RomanNumeral}`

} 



const submit = document.getElementbyId('sumbit')
submit.addEventListener ('click', handleConvert)


