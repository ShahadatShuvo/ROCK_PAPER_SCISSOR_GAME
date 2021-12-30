//Author: HossAin Shuvo


let img_rock = document.querySelector('#rock');
let img_paper = document.querySelector('#paper');
let img_scissor = document.querySelector('#scissor');


// // js invocation => Immediately invocked function..
// (function() { alert("Allah is almighty of all"); })();

console.log(`Developed by: HossAin Shuvo`);
console.log(`Facebook: https://www.facebook.com/hossain.shuvo.7860/`);

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
let userInput = '';

function getComputerInput() {
    let randomValue = Math.floor(Math.random() * 10);
    if (randomValue >= 0 && randomValue < 4) {
        return ROCK;
    } else if (randomValue >= 4 && randomValue < 7) {
        return PAPER;
    } else {
        return SCISSOR;
    }

}

function myGame(userInput) {
    let computerInput = getComputerInput();

    if (userInput == computerInput) {
        alert(`Match Draw! Your input was ${userInput} and Computer input was ${computerInput}`);
    } else if ((userInput == ROCK && computerInput == SCISSOR) || (userInput == PAPER && computerInput == ROCK) || (userInput == SCISSOR && computerInput == PAPER)) {
        alert(`Congratulations! YOU WON!!!  Your input was ${userInput} and Computer input was ${computerInput}`);
    } else {
        alert(`Opps! YOU LOST!!!  Your input was ${userInput} and Computer input was ${computerInput}`);
    }
}

img_rock.addEventListener('click', function() {
    userInput = ROCK;
    myGame(userInput);
});
img_paper.addEventListener('click', function() {
    userInput = PAPER;
    myGame(userInput);
});
img_scissor.addEventListener('click', function() {
    userInput = SCISSOR;
    myGame(userInput);
});