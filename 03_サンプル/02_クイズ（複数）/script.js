const quiztext = document.getElementById("quiz-text")
const sentence = document.getElementById("sentence")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextbutton = document.getElementById("next-quiz")

let quiznum = 0
const quizzes = [
  {
    text: "このセリフは誰が発した言葉？",
    sent: "一番いいのは、やって後悔しないことだ",
    choices: [
      {
        text: "阿良々木暦",
        iscorrect: false,
        feedback: "不正解",
      },
      {
        text: "神原駿河",
        iscorrect: true,
        feedback: "正解",
      },
      {
        text: "千石撫子",
        iscorrect: false,
        feedback: "不正解",
      },
    ],
  },
  {
    text: "今何問目？",
    sent: "覚えているかな？",
    choices: [
      {
        text: "1",
        iscorrect: false,
        feedback: "不正解",
      },
      {
        text: "2",
        iscorrect: true,
        feedback: "正解",
      },
      {
        text: "3",
        iscorrect: false,
        feedback: "不正解",
      },
    ],
  },
  {
    text: "五等分の花嫁に登場する中野五月の声優は誰？",
    sent: "上杉君、起きて？",
    choices: [
      {
        text: "花澤香菜",
        iscorrect: false,
        feedback: "不正解",
      },
      {
        text: "水瀬いのり",
        iscorrect: true,
        feedback: "正解",
      },
      {
        text: "佐倉綾音",
        iscorrect: false,
        feedback: "不正解",
      },
    ],
  },
]

const reloadQuiz = function (quiznum) {
  const quiz = quizzes[quiznum]
  quiztext.textContent = "Q" + quiz.text
  sentence.textContent = quiz.sent
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text

  feedback.textContent = ""

  nextbutton.classList.add("hidden")
}

const choose = function (choicenum) {
  const choice = quizzes[quiznum].choices[choicenum]

  feedback.textContent = choice.feedback

  if (choice.iscorrect) {
    if (quiznum < quizzes.length - 1) {
      nextbutton.classList.remove("hidden")
    } else {
    }
  }
}

choice1.onclick = function () {
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  choose(2)
}

nextbutton.onclick = function () {
  quiznum += 1
  reloadQuiz(quiznum)
  if (quiznum > 2) {
    quiztext.textContent = "終了！"
  }
}
reloadQuiz(0)
