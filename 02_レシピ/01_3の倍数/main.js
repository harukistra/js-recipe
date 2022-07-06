const Geek = function (num) {
  for (let n = 1; n <= num; n++) {
    if (n % 3 === 0) {
      console.log("3の倍数ですよ！！")
    } else {
      console.log(n)
    }
  }
}
Geek(10)
