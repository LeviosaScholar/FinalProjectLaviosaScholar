const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const explainationContainerElement = document.getElementById('explaination-container')
const explainationElement = document.getElementById('explaination')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  answerButtonsElement.classList.remove('disable')
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
    explainationElement.innerText = question.explaination
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  explainationContainerElement.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    answerButtonsElement.classList.add('disable')
    nextButton.classList.remove('hide')

  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
  explainationContainerElement.classList.remove('hide')
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Tell us about yourself',
    answers: [
      { text: 'Tell name, family, sibling', correct: false },
      { text: 'Life story; such as where you live, grow up, schools', correct: false },
      { text: 'Retell the info in your resume', correct: false },
      { text: 'Interest, skills, personality, future plan', correct: true }
    ],
    explaination: 'The interviewers are interested in your long-term and short-term goals, show your passion, relates you interest, skills and personality to the scholarship. Make it short but valueble. Dont need to retell the information that you already put in resume. Show that you have the best values to set you apart from other candidate'
  },
  {
    question: 'What is your greatest strength?',
    answers: [
      { text: 'Be Humble', correct: false },
      { text: 'Lie about a very good strength', correct: false },
      { text: 'Focus on one strength and give example', correct: true },
      { text: 'Tell all of your strength but be brief about each of it', correct: false }
    ],
      explaination: 'Choose a specific strength that you have and give exampla on how it has benefited you throughout your life especially in the education path or career. Do not be humble, be confidence and boast on your strength but never lie. Show how the positive attribute to the highlighted strength and backup with a story. You need to focus on one because if your tell too many strength, you cannot describe it all in a short time, it seem you are just boasting and full of yourself.'
  },
  {
    question: 'What is your biggest weakness?',
    answers: [
      { text: 'Gain the interviewers symphaty and add sad story about your weakness', correct: false },
      { text: 'Talk about your weakness in a positive light', correct: true },
      { text: '"I do not have any weakness"', correct: false },
      { text: '"I have so many weakness that I do not know where to start"', correct: false }
    ],
      explaination: 'The interviewers want to know either you are self-aware person or not and how you overcome an obstacle and weakness. Paint you weakness in a positive light! Show how you counterbalance your weakness. Tell them a story where you working on overcoming that weakness. Do not say you are a perfectionist and you do not have a weakness.'
  },
  {
    question: 'Why do you deserve this scholarship?',
    answers: [
      { text: 'Due to skills and accomplishments or tell your goal and how this scholarship help to gain it', correct: true },
      { text: 'Be humble, You are ordinary student that just wish to get a scholarship', correct: false },
      { text: 'Due to high GPA', correct: false }
    ],
      explaination: 'Be honest and open. Tell your reason. But! Never say due to high GPA, everyone that apply to the scholarship and get to the interview phase have high GPA. High GPA doesnot make you different or special from other candidates. Tell how you deserve this scholarship because you have the skills and great accomplishments . You have unique experiences that will be a good indicator of your future success. Tell how this scholarship will help you gain more opportunities.'
  },
  {
    question: 'Who is your role model?',
    answers: [
      { text: 'Talk about the role model and how you adore and have been a hardcore fans of them', correct: false },
      { text: 'Tell about a role model and how they inspire you to be more successful and better person', correct: true },
      { text: 'You donot have a role model', correct: false }
    ],
      explaination: 'The interviewer want to learn about you not your role model. That is why who you choose do not matter. You can simply choose your family member, teacher, friends or even superstar. But relate it with how they inspire you. How their success, personality or achievement inspire you to be successful and never give up on being a better person'
  },
  {
    question: 'Do you have any questions for me? or Is there anything else you’d like to add?',
    answers: [
      { text: 'No.', correct: false },
      { text: 'Yes, and ask question', correct: true }
    ],
      explaination: 'Never say NO! Ask any question even the smallest simplest thing to show that you are really invested in this scholarship. Or even use this opportunity to mention the things that you think the interviewers should know but you didnot get the opportunity to mention it. Here are some idea on the questions: "What’s something you wish you would have known when you were in my shoes? or "What advice would you give someone in my position?" or "How/why did you get into this field? or "What do you think is the biggest challenge for people looking to get into this field?'
  }
]
