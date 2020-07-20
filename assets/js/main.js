
const input = document.getElementById("input")
const key = document.getElementById("key")
const encode = document.getElementById("code")
const output = document.getElementById("result")
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function encrypt() {
    let resultArr = []
    let encodeAlphabet = []
    let result = ""
    let text = input.value.toLowerCase().split("")
    if (encode.checked) {
        for (let i = 0; i < alphabet.length; i++) {
            if ((i + +key.value < alphabet.length)) {
                encodeAlphabet.push(alphabet[i + +key.value])
            } else {
                encodeAlphabet.push(alphabet[(i - 26) + +key.value])
            }
        }
    } else {
        for (let i = 0; i < alphabet.length; i++) {
            if (i - +key.value < 0) {
                encodeAlphabet.push(alphabet[(26 - +key.value) + i])
            } else {
                encodeAlphabet.push(alphabet[i - +key.value])
            }
        }
    }
    if (encode.checked) {
        for (i = 0; i < text.length; i++) {
            if (alphabet.indexOf(text[i]) < 0 && text[i] == " ") {
                resultArr.push(' ')
            } else {
                resultArr.push(encodeAlphabet[alphabet.indexOf(text[i])])
            }
        }
        output.innerHTML = resultArr.join("").toUpperCase()
    } else {
        for (i = 0; i < text.length; i++) {
            if (alphabet.indexOf(text[i]) < 0 && text[i] == " ") {
                resultArr.push(' ')
            } else {
                resultArr.push(encodeAlphabet[alphabet.indexOf(text[i])])
            }
        }
        output.innerHTML = resultArr.join("").toLowerCase()
        }
}