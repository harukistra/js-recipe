const fig = document.getElementById("figure")

let count = 0
const countUp = function () {
  count += 1
  if (count % 3 === 0) {
    console.log(count + "!")
  } else {
    fig.textContent = count
  }
}

setInterval(countUp, 1000)
