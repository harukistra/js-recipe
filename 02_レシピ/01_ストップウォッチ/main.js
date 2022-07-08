const display = document.getElementById("display")
const display2 = document.getElementById("display2")
const button2 = document.getElementById("button2")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

const countUp2 = function () {
  count += 0.01
  display2.textContent = count
}

let id2 = null

button2.onclick = function () {
  if (id2 === null) {
    id2 = setInterval(countUp2, 10)
    button2.textContent = "stop"
  } else {
    clearInterval(id2)
    id2 = null
    button2.textContent("start")
  }
}

// button.onclick = function () {
//   setInterval(countUp, 10)
//   button.textContent = "stop"
// }

//処理速度の差
