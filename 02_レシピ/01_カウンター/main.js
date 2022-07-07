const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twiceButton = document.getElementById("twice-button")

let count = 0

const usefulbutton = function () {
  plusButton.onclick = function () {
    count += 1
    display.textContent = count
  }
  minusButton.onclick = function () {
    count -= 1
    display.textContent = count
  }
  twiceButton.onclick = function () {
    count *= 2
    display.textContent = count
  }
}

usefulbutton()

const update = function (_v) {
  document.querySelector("input").value = _v
}
// const append = function (_v) {
//   document.querySelector("input").value += _v
// }
const calc = function () {
  const v = document.querySelector("input").value
  try {
    const f = new Function("return " + v)
    update(f().toString()) // inputタグにあかれている文字列を実行
  } catch (_error) {
    update(_error)
  }
}
