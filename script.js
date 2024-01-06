const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

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
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
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
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The first search engine on the internet is ?',
    answers: [
      { text: 'Archie', correct: true },
      { text: 'Google', correct: false },
      { text: 'Bing', correct: false },
      { text: 'Yahoo', correct: false }
    ]
  },
  {
    question: 'How many bits make a byte?',
    answers: [
      { text: '22 bits', correct: false },
      { text: '16 bits', correct: false },
      { text: '8 bits', correct: true },
      { text: '12 bits', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'The number of bits used by IPv6 address is ?',
    answers: [
      { text: '16', correct: false },
      { text: '32', correct: false },
      { text: '64', correct: false },
      { text: '128', correct: true }
    ]
  },
  {
    question: 'The first web browser invented in 1990 was?',
    answers: [
      { text: 'Nexus', correct: false },
      { text: 'Internet Explorer', correct: false },
      { text: 'Mosaic', correct: false },
      { text: 'WorldWideWeb', correct: true }
    ]
  },
  {
    question: 'Which technology is used to record cryptocurrency transactions?',
    answers: [
      { text: 'Mining', correct: false },
      { text: 'Digital Wallet', correct: false },
      { text: 'BlockChain technology', correct: true },
      { text: 'Token', correct: false }
    ]
  },
  {
    question: 'One of the advantages of information technology is?',
    answers: [
      { text: 'Streamline Communication', correct: true },
      { text: 'Easy to handle', correct: false },
      { text: 'Both A and B', correct: false },
      { text: 'None', correct: false }
    ]
  },
  {
    question: 'The first computer virus was known as?',
    answers: [
      { text: 'Rabbit', correct: false },
      { text: 'ELK Cloner', correct: false },
      { text: 'SCA Virus', correct: false },
      { text: 'Creeper Program ', correct: true }
    ]
  },
  {
    question: 'What technology is used to make telephone calls over the Internet possible?',
    answers: [
      { text: 'VoIP ', correct: true },
      { text: 'Bluetooth', correct: false },
      { text: 'Internet', correct: false },
      { text: 'All of the above ', correct: false }
    ]
  },
  {
    question: 'The first computer virus was known as?',
    answers: [
      { text: 'Rabbit', correct: false },
      { text: 'ELK Cloner', correct: false },
      { text: 'SCA Virus', correct: false },
      { text: 'Creeper Program ', correct: true }
    ]
  }
]