export const utils = {
  randomNumGenerator: function() {
    return Math.floor(Math.random() * 3)
  },

  determineWinner: function(playerChoice, computerChoice) {
    let winner;
    switch(playerChoice) {
      case 'rock':
        if(computerChoice === 'rock') {
          winner = 'draw'
        } else if(computerChoice === 'paper') {
          winner = 'computer'
        } else {
          winner = 'player'
        }
        break;
      case 'paper':
        if(computerChoice === 'rock') {
          winner = 'player'
        } else if(computerChoice === 'paper') {
          winner = 'draw'
        } else {
          winner = 'computer'
        }
      break;
      case 'scissors':
        if(computerChoice === 'rock') {
          winner = 'computer'
        } else if(computerChoice === 'paper') {
          winner = 'player'
        } else {
          winner = 'draw'
        }
      }
    return winner
  },

  handleClassChange: function(elemArray, change) {
    switch(change) {
      case 'add':
        elemArray.forEach(elem => elem.classList.add('hidden'))
        break;
      case 'toggle':
        elemArray.forEach(elem => elem.classList.toggle('hidden'))  
        break;
      case 'remove':
        elemArray.forEach(elem => elem.classList.remove('hidden'))
        break;
      default: null
    }
  }
}

