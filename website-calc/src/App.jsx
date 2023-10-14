import React, { useState } from "react"
import calc from "./calculate"
import './App.css';

function App() {
  const [display, setDisplay] = useState("");
  const [cursor, setCursor] = useState(0);
  const [equaled, setEqualed] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [themeButton, setThemeButton] = useState("m 7.5 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2 c 0 0.277344 0.222656 0.5 0.5 0.5 h 1 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -2 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -4.449219 1.84375 c -0.128906 0 -0.253906 0.046875 -0.351562 0.144531 l -0.710938 0.710938 c -0.195312 0.195312 -0.195312 0.507812 0 0.707031 l 1.417969 1.414062 c 0.195312 0.195313 0.507812 0.195313 0.707031 0 l 0.707031 -0.707031 c 0.195313 -0.199219 0.195313 -0.511719 0 -0.707031 l -1.414062 -1.417969 c -0.101562 -0.097656 -0.226562 -0.144531 -0.355469 -0.144531 z m 9.898438 0 c -0.128907 0 -0.253907 0.046875 -0.355469 0.144531 l -1.414062 1.417969 c -0.195313 0.195312 -0.195313 0.507812 0 0.707031 l 0.707031 0.707031 c 0.199219 0.195313 0.511719 0.195313 0.707031 0 l 1.417969 -1.414062 c 0.195312 -0.199219 0.195312 -0.511719 0 -0.707031 l -0.710938 -0.710938 c -0.097656 -0.097656 -0.222656 -0.144531 -0.351562 -0.144531 z m -4.949219 2.164062 c -2.195312 0 -4 1.804688 -4 4 c 0 2.191407 1.804688 4 4 4 s 4 -1.808593 4 -4 c 0 -2.195312 -1.804688 -4 -4 -4 z m -7.5 2.992188 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 13 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -9.742188 4.035156 c -0.128906 0 -0.253906 0.046875 -0.351562 0.144532 l -1.417969 1.414062 c -0.195312 0.199219 -0.195312 0.511719 0 0.707031 l 0.710938 0.710938 c 0.195312 0.195312 0.507812 0.195312 0.707031 0 l 1.414062 -1.417969 c 0.195313 -0.195312 0.195313 -0.507812 0 -0.707031 l -0.707031 -0.707031 c -0.101562 -0.097657 -0.226562 -0.144532 -0.355469 -0.144532 z m 8.484376 0 c -0.128907 0 -0.253907 0.046875 -0.355469 0.144532 l -0.707031 0.707031 c -0.195313 0.199219 -0.195313 0.511719 0 0.707031 l 1.414062 1.417969 c 0.199219 0.195312 0.511719 0.195312 0.707031 0 l 0.710938 -0.710938 c 0.195312 -0.195312 0.195312 -0.507812 0 -0.707031 l -1.417969 -1.414062 c -0.097656 -0.097657 -0.222656 -0.144532 -0.351562 -0.144532 z m -4.742188 1.964844 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2 c 0 0.277344 0.222656 0.5 0.5 0.5 h 1 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -2 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 0 0");

  function changeTheme() {
    if (theme === "light") {
      let calculatorElement = document.querySelector(".calculator")
      let themeButtonElement = document.getElementById("themeButton")
      setThemeButton("m 7.5 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2 c 0 0.277344 0.222656 0.5 0.5 0.5 h 1 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -2 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -4.449219 1.84375 c -0.128906 0 -0.253906 0.046875 -0.351562 0.144531 l -0.710938 0.710938 c -0.195312 0.195312 -0.195312 0.507812 0 0.707031 l 1.417969 1.414062 c 0.195312 0.195313 0.507812 0.195313 0.707031 0 l 0.707031 -0.707031 c 0.195313 -0.199219 0.195313 -0.511719 0 -0.707031 l -1.414062 -1.417969 c -0.101562 -0.097656 -0.226562 -0.144531 -0.355469 -0.144531 z m 9.898438 0 c -0.128907 0 -0.253907 0.046875 -0.355469 0.144531 l -1.414062 1.417969 c -0.195313 0.195312 -0.195313 0.507812 0 0.707031 l 0.707031 0.707031 c 0.199219 0.195313 0.511719 0.195313 0.707031 0 l 1.417969 -1.414062 c 0.195312 -0.199219 0.195312 -0.511719 0 -0.707031 l -0.710938 -0.710938 c -0.097656 -0.097656 -0.222656 -0.144531 -0.351562 -0.144531 z m -4.949219 2.164062 c -2.195312 0 -4 1.804688 -4 4 c 0 2.191407 1.804688 4 4 4 s 4 -1.808593 4 -4 c 0 -2.195312 -1.804688 -4 -4 -4 z m -7.5 2.992188 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 13 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -9.742188 4.035156 c -0.128906 0 -0.253906 0.046875 -0.351562 0.144532 l -1.417969 1.414062 c -0.195312 0.199219 -0.195312 0.511719 0 0.707031 l 0.710938 0.710938 c 0.195312 0.195312 0.507812 0.195312 0.707031 0 l 1.414062 -1.417969 c 0.195313 -0.195312 0.195313 -0.507812 0 -0.707031 l -0.707031 -0.707031 c -0.101562 -0.097657 -0.226562 -0.144532 -0.355469 -0.144532 z m 8.484376 0 c -0.128907 0 -0.253907 0.046875 -0.355469 0.144532 l -0.707031 0.707031 c -0.195313 0.199219 -0.195313 0.511719 0 0.707031 l 1.414062 1.417969 c 0.199219 0.195312 0.511719 0.195312 0.707031 0 l 0.710938 -0.710938 c 0.195312 -0.195312 0.195312 -0.507812 0 -0.707031 l -1.417969 -1.414062 c -0.097656 -0.097657 -0.222656 -0.144532 -0.351562 -0.144532 z m -4.742188 1.964844 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2 c 0 0.277344 0.222656 0.5 0.5 0.5 h 1 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -2 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 0 0")
      themeButtonElement.style.setProperty("fill", "#ffffff")
      calculatorElement.style.setProperty("color-scheme", "dark")
      calculatorElement.style.setProperty("--text-color", "#ffffff")
      calculatorElement.style.setProperty("--app-background", "#242424")
      calculatorElement.style.setProperty("--app-border", "#333333")
      calculatorElement.style.setProperty("--display-color", "#3a3a3a")
      calculatorElement.style.setProperty("--button-angle-arrow", "var(--button-angle-arrow-dark)")
      calculatorElement.style.setProperty("--button-titlebar-color-hover", "#333333")
      calculatorElement.style.setProperty("--button-operator-color", "#3a3a3a")
      calculatorElement.style.setProperty("--button-operator-color-hover", "#454545")
      calculatorElement.style.setProperty("--button-digit-color", "#454545")
      calculatorElement.style.setProperty("--button-digit-color-hover", "#585858")
      calculatorElement.style.setProperty("--button-clear-color", "#c01c28")
      calculatorElement.style.setProperty("--button-clear-color-hover", "#c6333d")
      calculatorElement.style.setProperty("--button-equals-color", "#3584e4")
      calculatorElement.style.setProperty("--button-equals-color-hover", "#4990e7")
      calculatorElement.style.setProperty("--button-equals-text-color", "#ffffff")
      setTheme("dark")
    }
    else {
      let calculatorElement = document.querySelector(".calculator")
      let themeButtonElement = document.getElementById("themeButton")
      setThemeButton("m 6.816406 1.011719 c -3.308594 0.570312 -5.839844 3.472656 -5.839844 6.941406 c 0 3.871094 3.160157 7.046875 7.023438 7.046875 c 1.753906 0 3.367188 -0.660156 4.597656 -1.734375 c 0.605469 -0.5273440.371094-1.515625-0.40625 -1.722656 c -2.8125 -0.734375 -4.914062 -3.304688 -4.914062 -6.367188 c 0 -0.984375 0.222656 -1.910156 0.613281 -2.757812 c 0.339844 -0.730469 -0.28125 -1.539063 -1.074219 -1.40625 z m 0 0")
      themeButtonElement.style.setProperty("fill", "#323232")
      calculatorElement.style.setProperty("color-scheme", "light")
      calculatorElement.style.setProperty("--text-color", "#323232")
      calculatorElement.style.setProperty("--app-background", "#fafafa")
      calculatorElement.style.setProperty("--app-border", "#cecece")
      calculatorElement.style.setProperty("--display-color", "#e6e6e6")
      calculatorElement.style.setProperty("--button-angle-arrow", "var(--button-angle-arrow-light)")
      calculatorElement.style.setProperty("--button-titlebar-color-hover", "#ececec")
      calculatorElement.style.setProperty("--button-operator-color", "#e6e6e6")
      calculatorElement.style.setProperty("--button-operator-color-hover", "#dcdcdc")
      calculatorElement.style.setProperty("--button-digit-color", "#dcdcdc")
      calculatorElement.style.setProperty("--button-digit-color-hover", "#cacaca")
      calculatorElement.style.setProperty("--button-clear-color", "#e01b24")
      calculatorElement.style.setProperty("--button-clear-color-hover", "#e3323a")
      calculatorElement.style.setProperty("--button-equals-color", "#3584e4")
      calculatorElement.style.setProperty("--button-equals-color-hover", "#4990e7")
      calculatorElement.style.setProperty("--button-equals-text-color", "#ffffff")
      setTheme("light")
    }
  }

  function updateInputChange(object) {
    setDisplay(object.target.value)
    setCursor(object.target.selectionStart)
    setEqualed(false)
  }
  
  function updateInputClick(object) {
    setCursor(object.target.selectionStart)
    setEqualed(false)
  }
  
  function updateInputKeyDown(object) {
    if (object["key"] === "ArrowRight") {
      setCursor(cursor+1)
    }
    else if (object["key"] === "ArrowLeft") {
      setCursor(cursor-1)
    }
    else {
      setCursor(object.target.selectionStart)
    }
  }

  function doEquals() {
    let result = calc(display)
    setEqualed(true)
    setDisplay(result)
  }

  function clearDisplay() {
    setDisplay("")
    setCursor(0)
  }

  function addToDisplay(string) {
    setDisplay(display.slice(0, cursor) + string + display.slice(cursor))
    if (string.length === 5) {
      setCursor(cursor+string.length-1)
    }
    else {
      setCursor(cursor+string.length)
    }
  }

  function addCharacter(string) {
    if (equaled) {
      setDisplay(string)
      setEqualed(false)
    }
    else {
      addToDisplay(string)
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="titlebar">
          <select className="angleselect" defaultValue={"degrees"}>
            <option value="degrees">Degrees</option>
            <option value="radians">Radians</option>
          </select>
          <button className="themebutton" onClick={changeTheme}>
            <svg height="0.8em" viewBox="0 0 16 16" width="0.8em" xmlns="http://www.w3.org/2000/svg">
              <path id="themeButton" d={themeButton} style={{fill: "#ffffff"}}/>
            </svg>
          </button>
        </div>
        <div className="display">
          <input className="inputDisplay" type="text" onChange={updateInputChange} onClick={updateInputClick} onKeyDown={updateInputKeyDown} value={display}></input>
          <span className="fakeDisplay">{display}</span>
        </div>
        <div className="buttons">
          <ul>
          <li><button onClick={() => addCharacter("%()")} className="operator">%</button></li>
          <li><button onClick={() => addCharacter("^()")} className="operator">xⁿ</button></li>
          <li><button onClick={() => addCharacter("√()")} className="operator">√</button></li>
          <li><button onClick={() => addCharacter("π")} className="operator">π</button></li>
          <li><button onClick={clearDisplay} className="clear"><svg height="0.8em" viewBox="0 0 16 16" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path d="m 7 2 c -0.832031 0 -1.558594 0.34375 -2.292969 0.78125 s -1.464843 1.003906 -2.128906 1.597656 c -0.660156 0.597656 -1.253906 1.222656 -1.707031 1.796875 c -0.226563 0.289063 -0.417969 0.5625 -0.570313 0.835938 c -0.152343 0.277343 -0.300781 0.53125 -0.300781 0.988281 s 0.148438 0.710938 0.300781 0.984375 c 0.152344 0.277344 0.34375 0.550781 0.570313 0.835937 c 0.453125 0.578126 1.046875 1.203126 1.707031 1.796876 c 0.664063 0.597656 1.394531 1.164062 2.128906 1.601562 s 1.460938 0.78125 2.292969 0.78125 h 6 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 1 3 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 1.292969 1.292969 l 1.292969 -1.292969 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 s 0.519531 0.105469 0.707031 0.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -1.292969 1.292969 l 1.292969 1.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 s -1.023437 0.390625 -1.414062 0 l -1.292969 -1.292969 l -1.292969 1.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 s -0.390625 -1.023437 0 -1.414062 l 1.292969 -1.292969 l -1.292969 -1.292969 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 z m 0 0" fill="#ffffff"/></svg></button></li>
          </ul>
          <ul>
          <li><button onClick={() => addCharacter("7")} className="digit">7</button></li>
          <li><button onClick={() => addCharacter("8")} className="digit">8</button></li>
          <li><button onClick={() => addCharacter("9")} className="digit">9</button></li>
          <li><button onClick={() => addCharacter("()")} className="operator">()</button></li>
          <li><button onClick={() => addCharacter("sin()")} className="operator">sin</button></li>
          </ul>
          <ul>
          <li><button onClick={() => addCharacter("4")} className="digit">4</button></li>
          <li><button onClick={() => addCharacter("5")} className="digit">5</button></li>
          <li><button onClick={() => addCharacter("6")} className="digit">6</button></li>
          <li><button onClick={() => addCharacter("/")} className="operator">/</button></li>
          <li><button onClick={() => addCharacter("cos()")} className="operator">cos</button></li>
          </ul>
          <ul>
          <li><button onClick={() => addCharacter("1")} className="digit">1</button></li>
          <li><button onClick={() => addCharacter("2")} className="digit">2</button></li>
          <li><button onClick={() => addCharacter("3")} className="digit">3</button></li>
          <li><button onClick={() => addCharacter("-")} className="operator">-</button></li>
          <li><button onClick={() => addCharacter("tan()")} className="operator">tan</button></li>
          </ul>
          <ul>
          <li><button onClick={() => addCharacter("0")} className="digit">0</button></li>
          <li><button onClick={() => addCharacter(".")} className="operator">.</button></li>
          <li><button onClick={() => addCharacter("+")} className="operator">+</button></li>
          <li><button onClick={() => addCharacter("×")} className="operator">×</button></li>
          <li><button onClick={() => doEquals()} className="equals">=</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
