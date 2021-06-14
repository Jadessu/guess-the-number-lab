const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses:[],
    play: function() {
      alert("How good is your guessing game? Let's find out!")
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
       do{
          this.getGuess()
          this.prevGuesses.push(this.guess)
          this.render()
  } while (this.guess != this.secretNum)
  
      return
  },
  
  
      getGuess: function(){
  
   do {
             this.guess = parseInt(prompt(`Guess a number between ${this.smallestNum} and ${this.biggestNum}`))
   } while(
              this.guess < this.smallestNum || this.guess > this.biggestNum || this.guess === NaN)
      },
  
  render: function(){
       if (this.guess > this.secretNum) {
                  alert("You've guessed too high!");
                  alert(`Your previous guesses: ${this.prevGuesses}. Keep guessing!`);
              } 
                  else if (this.guess < this.secretNum) {
                  alert("You've guessed too low!");
                  alert(`Your previous guesses: ${this.prevGuesses}. Keep guessing!`);
              } 
                  else {
                          alert(`Good Job!, the secret number was ${this.secretNum}`)
                          alert(`It took you ${this.prevGuesses.length} tries to figure it out`) }
  }
      }
  
  game.play()
  

 