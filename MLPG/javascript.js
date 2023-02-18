






let upper = document.getElementById("upper")
let lower = document.getElementById("lower")
let numbers = document.getElementById("number")
let symbols = document.getElementById("symbol")
let length = document.getElementById("myText")

function random(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

let cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let no = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let sym = ["`", "!", "@", "#", "$", "%", "^", "'", "&", "*", "(", ")", "-", "_", "=", "+", "<", ">", "/", "?", "|", "."]

function generate() {
  let pass = ""
  let passLength = parseInt(length.value) // convert the length value to a number
  
  let isUpper = upper.checked
  let isLower = lower.checked
  let isNumber = numbers.checked
  let isSymbol = symbols.checked

  for (let i = 0; pass.length < passLength; i++) { // fix the length check in the loop condition
    let x = random(1, 4)
    if (x === 1) {
      if (!isUpper) { // use the ! operator to check if isUpper is false
        x = 0;
      }
    } else if (x === 2) {
      if (!isLower) { // use the ! operator to check if isLower is false
        x = 0;
      }
    } else if (x === 3) {
      if (!isNumber) { // use the ! operator to check if isNumber is false
        x = 0;
      }
    } else if (x === 4) {
      if (!isSymbol) { // use the ! operator to check if isSymbol is false
        x = 0;
      }
    }

    if (x === 1) {
      let y = random(0, 25) // use 0 as the start value instead of 1
      pass += cap[y]
    } else if (x === 2) {
      let y = random(0, 25) // use 0 as the start value instead of 1
      pass += low[y]
    } else if (x === 3) {
      let y = random(0, 9) // use 0 as the start value instead of 1
      pass += no[y]
    } else if (x === 4) {
      let y = random(0, 21) // use 0 as the start value instead of 1
      pass += sym[y]
    }
  }
  document.getElementById("inputbox").value = pass
}
