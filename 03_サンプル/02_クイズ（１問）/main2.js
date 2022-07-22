// const choice1 = document.getElementById('choice-1')
// const choice2 = document.getElementById('choice-2')
// const choice3 = document.getElementById('choice-3')
// // const feedback = document.getElementById('feedback')

// const feedbacks = [
//     "釣られたな、ポッター",
//     "釣られたな、ポッター",
//     "正解だ、ポッター",
// ]

// const choose = function(choicenum) {
//     feedback.textContent = feedbacks[choicenum]
// }

// choice1.onclick = function() {
//     choose(0)
// }
// choice2.onclick = function() {
//     choose(1)
// }
// choice3.onclick = function() {
//     choose(2)
// }

const quiz = {
  text: "どの曲のフレーズでしょう",
  question: "オ～イェ!  エ～イ!、アハ～ン！",
  choices: [
    {
      text: "天体観測",
      feedback: "釣られたな、ポッター",
    },
    {
      text: "アカシア",
      feedback: "正解！　君もこれで　BUMP OF CHICKEN マスターだ！",
    },
    {
      text: "supernova",
      feedback: "やり直しだ、ポッター",
    },
  ],
}

const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

const reloadQuiz = function () {
  quizText.textContent = "Q." + quiz.text
  quizImage.textContent = quiz.question
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choosee = function (choiceNum) {
  feedback.textContent = quiz.choices[choiceNum].feedback
}

choice1.onclick = function () {
  choosee(0)
}

choice2.onclick = function () {
  choosee(1)
}
choice3.onclick = function () {
  choosee(2)
}

reloadQuiz()
