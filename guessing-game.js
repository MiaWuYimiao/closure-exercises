function guessingGame() {
    let secretNum = Math.floor(Math.random()*100);
    let won = false;
    let count = 0;
    return function game(num) {
        let ans = "";
        if(won){
            return "The game is over, you already won!";
        }
        count++;
        if(num < secretNum){
            return `${num} is too low!`;
        } else if(num > secretNum) {
            return `${num} is too high!`;
        } else {
            won = true;
            return `You win! You found ${secretNum} in ${count} guesses.`;
        }  
    }
}

module.exports = { guessingGame };
