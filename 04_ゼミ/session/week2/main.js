const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")

const logvalue = function (e) {
  console.log(e.target.value)
}

addbutton.onclick = function () {
  console.log(memoinput.value)
}

const card = document.createElement("div")
card.className = "card"
card.textContent = "Hello"

const memocontaier = document.getElementById("memo-container")

memocontaier.append(card)
memocontaier.append("yes")
