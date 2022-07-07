
const StandUp = function(num) {
    for(let n = 1; n<= num; n++) {
        a = n % 10
        b = (n - a) / 10
        if(n % 3 == 0 && n % 5 == 0) {
            console.log("FizzBuzz")
        } else if (n % 3 == 0) {
            console.log("Fizz")
        } else if (n % 5 === 0) {
            console.log("Buzz") 
        } else if (a === 3 || b === 3) {
            console.log("Fizz")
        }
        else {
            console.log(n)
        }
    }
}

StandUp(100)