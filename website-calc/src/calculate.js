export function calc(string, angle) {
  function isNumeric(string) {return /^\d+$/.test(string)}
  function toDegrees(number) {return number*(Math.PI/180)}
  function doTrigo(number, angle, trigoFunction) {
    if (angle === "degrees") {
      number = toDegrees(number)
    }
    console.log(angle)
    switch (trigoFunction) {
      case "sin":
        return Math.sin(number)
      case "cos":
        return Math.cos(number)
      case "tan":
        return Math.tan(number)
      default:
        return "Invalid trigoFunction"
    }
  }
  function findNextParenthesis(string, openParenthesis) {
      let parClosed = openParenthesis
      let notFoundParClosed = true
      let foundParsOpen = 0
      while (notFoundParClosed) {
          parClosed++
          if (string[parClosed] === "(") {
              foundParsOpen += 1
          }
          else if (string[parClosed] === ")" && foundParsOpen === 0) {
              notFoundParClosed = false
          }
          else if (string[parClosed] === ")") {
              foundParsOpen -= 1
          }
          else if (string.length < parClosed) {
              break
          }
      }
      return parClosed
  }

  function separateEquation(string) {
    let currNumber = ""
    let separatedEquation = []
    for (let i = 0; i < string.length; i++) {
      let item = string[i]
      if (isNumeric(item) || item === ".") {
        currNumber += item
      }
      else if (currNumber !== "") {
        separatedEquation.push(currNumber)
        currNumber = ""
      }
      if (["+", "-", "×", "/", "π"].includes(item)) {
        separatedEquation.push(item)
      }
      else if (item === "(") {
        let closingParenthesis = findNextParenthesis(string, i)
        let parenthesisString = string.slice(i, closingParenthesis+1)
        // See what's before the parenthesis
        if (string[i-1] === "^") {
          separatedEquation.push(separatedEquation[separatedEquation.length-1]+"^"+parenthesisString)
          separatedEquation.splice(separatedEquation.length-2, 1)
        }
        else if (string[i-1] === "√") {separatedEquation.push("√"+parenthesisString)}
        else if (string[i-1] === "%") {separatedEquation.push("%"+parenthesisString)}
        else if (string.slice(i-3, i) === "sin") {separatedEquation.push("sin"+parenthesisString)}
        else if (string.slice(i-3, i) === "cos") {separatedEquation.push("cos"+parenthesisString)}
        else if (string.slice(i-3, i) === "tan") {separatedEquation.push("tan"+parenthesisString)}
        else {separatedEquation.push(parenthesisString)}
        i = closingParenthesis
      }
    }
    if (currNumber !== "") {
      separatedEquation.push(currNumber)
    }
    return separatedEquation
  }

  function replacePIs(array) {
    let changedArray = array
    for (let i = 0; i < changedArray.length; i++) {
      while (changedArray[i].includes("π")) {
        changedArray[i] = changedArray[i].replace("π", Math.PI)
      }
    }
    return changedArray
  }

  function doParenthesisEquations(array, angle) {
    let changedArray = array
    for (let i = 0; i < changedArray.length; i++) {
      let item = changedArray[i]
      let lastIndex = item.length
      if (item[0] === "(") {changedArray[i] = calc(item.slice(1, lastIndex-1))}
      else if (item[0] === "√") {changedArray[i] = Math.sqrt(parseFloat(calc(item.slice(2, lastIndex-1))))}
      else if (item[0] === "%") {changedArray[i] = parseFloat(calc(item.slice(1, lastIndex-1)))/100}
      else if (item.includes("^")) {
        let symbolLocation = item.indexOf("^")
        let beforeSymbol = parseFloat(item.slice(0, symbolLocation))
        let afterSymbol = parseFloat(calc(item.slice(symbolLocation+2, lastIndex-1)))
        changedArray[i] = beforeSymbol**afterSymbol
      }
      else if (item.slice(0, 3) === "sin") {changedArray[i] = doTrigo(parseFloat(calc(item.slice(4, lastIndex-1))), angle, "sin")}
      else if (item.slice(0, 3) === "cos") {changedArray[i] = doTrigo(parseFloat(calc(item.slice(4, lastIndex-1))), angle, "cos")}
      else if (item.slice(0, 3) === "tan") {changedArray[i] = doTrigo(parseFloat(calc(item.slice(4, lastIndex-1))), angle, "tan")}
      changedArray[i] = ""+changedArray[i]
    }
    return changedArray
  }

  function doMultiplicationAndDivisions(array) {
    let changedArray = array
    for (let i = 0; i < changedArray.length; i++) {
      let item = changedArray[i]
      if (item === "×") {
        changedArray[i+1] = ""+(parseFloat(changedArray[i-1]) * parseFloat(changedArray[i+1]))
        changedArray[i-1] = ""
        changedArray[i] = ""
      }
      else if (item === "/") {
        changedArray[i+1] = ""+(parseFloat(changedArray[i-1]) / parseFloat(changedArray[i+1]))
        changedArray[i-1] = ""
        changedArray[i] = ""
      }
    }
    while (changedArray.includes('')) {changedArray.splice(changedArray.indexOf(''), 1)}
    return changedArray
  }

  function doAdditionAndSubtraction(array) {
    let result = parseFloat(array[0])
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (item === "+") {
        result += parseFloat(array[i+1])
      }
      else if (item === "-") {
        result -= parseFloat(array[i+1])
      }
    }
    return ""+result
  }

  let separated = separateEquation(string)
  let pireplaced = replacePIs(separated)
  let parented = doParenthesisEquations(pireplaced, angle)
  let muldivied = doMultiplicationAndDivisions(parented)
  let addsubed = doAdditionAndSubtraction(muldivied)
  
  return addsubed
}

export default calc;