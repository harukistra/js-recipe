const button = document.getElementById("button")
button.onclick = function () {
  alert("you clicked")
}

const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function (e) {
  console.log(e.target.value)
}

inputText.oninput = sayHello
inputDate.oninput = sayHello

document.onkeydown = function (a) {
  console.log(a.key)
}
