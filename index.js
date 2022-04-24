import { utils } from './utilityFunctions.js'

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const computerDisplay = document.querySelector('#computer-display')
const placeholder = document.querySelector('#placeholder')
const playerScore = document.querySelector('#player-score')
const computerScore = document.querySelector('#computer-score')

const buttons = [rock, paper, scissors]
const computerSection = [computerDisplay, placeholder]

buttons.forEach(button => {
  button.addEventListener('click', (e) => game.handleGameflow(e.target.id))
})

const game = {
  choices: ['rock', 'paper', 'scissors'],
  playerScore: 0,
  computerScore: 0,
  
  handleGameflow: function(selection) {
    let computerSelection
    let animationIteration = 1
    //images to hide after player makes their selection
    const selectionsToHide = buttons.filter(button => button.id !== selection)
    //hides those selections
    utils.handleClassChange(selectionsToHide, 'add')
    //removes '?' from screen and displays images in 'computer chooses' section
    utils.handleClassChange(computerSection, 'toggle')
    //computers selection 
    computerSelection = this.choices[utils.randomNumGenerator()]
    //stores winner in variable
    const winner = utils.determineWinner(selection, computerSelection)
    //first image in computer selection animation
    computerDisplay.src = `./images/rock.png`
    computerDisplay.classList.add('blink')

    //iterates through choices to generate images
    const displayInterval = setInterval(()=> {
      computerDisplay.src = `./images/${this.choices[animationIteration]}.png`
      animationIteration +=1
    },1000)
    //stops interval & animation. Displays computer choice
    setTimeout(() => {
      clearInterval(displayInterval)
      computerDisplay.classList.remove('blink')
      computerDisplay.src = `./images/${computerSelection}.png`
    },3000)
    //resets gamestate and check to see if there's a winner
    setTimeout(() => {
      utils.handleClassChange(computerSection, 'toggle')
      utils.handleClassChange(buttons, 'remove')
      this.adjustScore(winner)
      // this.checkForWin()
    },4500)
  },

  adjustScore: function(winner) {
    if(winner === 'player') {
      this.playerScore += 1
      playerScore.innerHTML = this.playerScore
    } else if(winner === 'computer') {
      this.computerScore += 1
      computerScore.innerHTML = this.computerScore
    }
  },

  checkForWin: function() {
    this.playerScore === 5 && console.log('Human wins')
    this.computerScore === 5 && console.log('Computer wins')
  }
}
