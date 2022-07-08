const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")
const trianglebutton = document.getElementById("triangle-button")
const fig2 = document.querySelector(".square.rounded")
const fig3 = document.querySelector(".square.triangle")

let count = 1

figure.onclick = function () {
  if (count % 3 === 1) {
    figure.classList.add("rounded")
    count += 1
  } else if (count % 3 === 2) {
    figure.classList.add("triangle")
    count += 1
  } else if (count % 3 === 0) {
    figure.classList.remove("triangle")
    figure.classList.remove("rounded")
    count += 1
  } //クリックされるたびにcountが増えていきあまりで分岐
}

circleButton.onclick = function () {
  // figure に rounded クラスを追加する
  figure.classList.add("rounded")
}

squareButton.onclick = function () {
  // figure から rounded クラスを削除する
  figure.classList.remove("rounded")
}
// figure.onclick = function () {
//   figure.classList.add("rounded")
//   console.log(figure)
// }

trianglebutton.onclick = function () {
  figure.classList.add("triangle")
}

// window.onload = function () {
//   figure.classList.add("rounded")
// }
// figure.onmousemove = function () {
//   figure.classList.toggle("rounded")
// }
